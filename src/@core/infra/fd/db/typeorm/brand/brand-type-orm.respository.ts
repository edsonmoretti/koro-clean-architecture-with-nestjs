import {Brand} from '../../../../../domain/ebr/brand/brand.entity';
import {BrandRepositoryInterface} from '../../../../../domain/ebr/repositories/brandRepositoryInterface';
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
}
