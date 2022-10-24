import {BrandRepository} from '../../domain/ebr/repositories/brand.repository';
import {Brand} from '../../domain/ebr/brand/brand.entity';

export class RouteInMemoryRepository implements BrandRepository {
  brands: Brand[] = []
  async insert(brand: Brand): Promise<void> {
    this.brands.push(brand)
  }
}
