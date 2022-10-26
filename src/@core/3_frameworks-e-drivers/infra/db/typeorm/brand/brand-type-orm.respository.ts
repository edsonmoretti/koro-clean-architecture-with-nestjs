import {Brand} from '../../../../../0_enterprise-business-rules/domain/brand/brand.entity';
import {
  BrandRepositoryInterface
} from '../../../../../0_enterprise-business-rules/domain/repositories/brand.repository.interface';
import {Repository} from 'typeorm';


export class BrandTypeOrmRepository implements BrandRepositoryInterface {
  constructor(private ormRepo: Repository<Brand>) {
  }

  async insert(route: Brand): Promise<void> {
    await this.ormRepo.save(route);
  }

  findAll(): Promise<Brand[]> {
    return this.ormRepo.find();
  }

  async update(brand: Brand): Promise<void> {
    await this.ormRepo.save(brand);
  }

}
