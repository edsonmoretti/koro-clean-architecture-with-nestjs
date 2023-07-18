import {Brand} from '../../domain/brand/brand.entity';
import {
  BrandRepositoryInterface
} from '../../domain/repositories/brand.repository.interface';
import {BrandUseCaseInput, BrandUseCaseOutput} from './brand-types';

export class UpdateBrandUseCase {

  constructor(private brandRepository: BrandRepositoryInterface) {
  }

  async execute(id: string, input: BrandUseCaseInput): Promise<Brand> {
    const brand = Brand.create(input);
    brand.id = id;
    console.log('brand', brand);
    await this.brandRepository.update(brand);
    return brand;
  }
}
