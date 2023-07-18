import {Brand} from '../../../../domain/brand/brand.entity';
import {
  BrandRepositoryInterface
} from '../../../../domain/repositories/brand.repository.interface';


export class BrandInMemoryRepository implements BrandRepositoryInterface {
  brands: Brand[] = []

  async insert(brand: Brand): Promise<void> {
    this.brands.push(brand)
  }

  async findAll(): Promise<Brand[]> {
    return this.brands
  }

  update(brand: Brand): Promise<void> {
    for (let i = 0; i < this.brands.length; i++) {
      if (this.brands[i].id === brand.id) {
        this.brands[i] = brand
        return Promise.resolve()
      }
    }
  }

  delete(id: string): Promise<boolean> {
    for (let i = 0; i < this.brands.length; i++) {
      if (this.brands[i].id === id) {
        this.brands.splice(i, 1)
        return Promise.resolve(true)
      }
    }
    return Promise.resolve(false)
  }
}
