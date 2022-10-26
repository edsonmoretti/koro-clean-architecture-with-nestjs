import {Module} from '@nestjs/common';
import {BrandController} from './brand.controller';
import {CreateBrandUseCase} from '../@core/1_application-business-rules/application/brand/create-brand.use-case';
import {
  BrandRepositoryInterface
} from '../@core/0_enterprise-business-rules/domain/repositories/brand.repository.interface';
import {ListAllBrandsUseCase} from '../@core/1_application-business-rules/application/brand/list-all-brands.use-case';
import {
  BrandInMemoryRepository
} from '../@core/3_frameworks-e-drivers/infra/db/in-memory/brand/brand-in-memory.respository';
import {getDataSourceToken, TypeOrmModule} from '@nestjs/typeorm';
import {BrandSchema} from '../@core/3_frameworks-e-drivers/infra/db/typeorm/brand/brand.schema';
import {
  BrandTypeOrmRepository
} from '../@core/3_frameworks-e-drivers/infra/db/typeorm/brand/brand-type-orm.respository';
import {DataSource} from 'typeorm';
import {Brand} from '../@core/0_enterprise-business-rules/domain/brand/brand.entity';
import {UpdateBrandUseCase} from '../@core/1_application-business-rules/application/brand/update-brand.use-case';

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
    },
    {
      provide: UpdateBrandUseCase,
      useFactory: (brandRepository: BrandRepositoryInterface) => {
        return new UpdateBrandUseCase(brandRepository);
      },
      inject: [database === 'sqlite' ? BrandTypeOrmRepository : BrandInMemoryRepository]
    },

  ]
})
export class BrandModule {}
