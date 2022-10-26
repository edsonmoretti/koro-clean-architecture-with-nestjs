import {Brand} from '../../../../../domain/ebr/brand/brand.entity';
import {BrandRepositoryInterface} from '../../../../../domain/ebr/repositories/brandRepositoryInterface';


export class BrandInMemoryRepository implements BrandRepositoryInterface {
  brands: Brand[] = []
  async insert(brand: Brand): Promise<void> {
    this.brands.push(brand)
  }

  async findAll(): Promise<Brand[]> {
    return this.brands
  }
}
