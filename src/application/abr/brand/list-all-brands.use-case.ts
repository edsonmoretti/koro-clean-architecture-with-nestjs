import {Brand} from '../../../domain/ebr/brand/brand.entity';
import {BrandRepository} from '../../../domain/ebr/repositories/brand.repository';
import {BrandUseCaseOutput} from './brand-types';

//TODO: SOLID -> S - Single-responsibility Principle (Princípio da responsabilidade única)
export class ListAllBrandsUseCase {

  constructor(private brandRepository: BrandRepository) {
  }

  async execute(): Promise<BrandUseCaseOutput[]> {
    const brands = await this.brandRepository.findAll();
    return brands.map(brand => brand.toJSON());
  }
}
