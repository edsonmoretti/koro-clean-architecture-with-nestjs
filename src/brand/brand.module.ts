import {Module} from '@nestjs/common';
import {BrandController} from './brand.controller';
import {CreateBrandUseCase} from '../@core/application/abr/brand/create-brand.use-case';
import {BrandRepositoryInterface} from '../@core/domain/ebr/repositories/brandRepositoryInterface';
import {ListAllBrandsUseCase} from '../@core/application/abr/brand/list-all-brands.use-case';
import {BrandInMemoryRepository} from '../@core/infra/fd/db/in-memory/brand/brand-in-memory.respository';
import {getDataSourceToken, TypeOrmModule} from '@nestjs/typeorm';
import {BrandSchema} from '../@core/infra/fd/db/typeorm/brand/brand.schema';
import {
  BrandTypeOrmRepository
} from '../@core/infra/fd/db/typeorm/brand/brand-type-orm.respository';
import {DataSource} from 'typeorm';
import {Brand} from '../@core/domain/ebr/brand/brand.entity';

const database = 'in-memory' || 'sqlite';

@Module({
  imports: [TypeOrmModule.forFeature([BrandSchema])],
  controllers: [BrandController],
  providers: [
    {
      provide: BrandTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new BrandTypeOrmRepository(dataSource.getRepository(Brand));
      },
      inject: [getDataSourceToken()],
    },
    // BrandService,
    {
      provide: BrandInMemoryRepository,
      useClass: BrandInMemoryRepository
    },
    // UseCases
    {
      provide: CreateBrandUseCase,
      useFactory: (brandRepository: BrandRepositoryInterface) => {
        return new CreateBrandUseCase(brandRepository);
      },
      inject: [database === 'sqlite' ? BrandTypeOrmRepository : BrandInMemoryRepository]
    },
    {
      provide: ListAllBrandsUseCase,
      useFactory: (brandRepository: BrandRepositoryInterface) => {
        return new ListAllBrandsUseCase(brandRepository);
      },
      inject: [database === 'sqlite' ? BrandTypeOrmRepository : BrandInMemoryRepository]
    }
  ]
})
export class BrandModule {}
