import {Brand} from '../../../domain/ebr/brand/brand.entity';
import {BrandRepository} from '../../../domain/ebr/repositories/brand.repository';
import {BrandUseCaseInput, BrandUseCaseOutput} from './brand-types';

export class CreateBrandUseCase {

  constructor(private brandRepository: BrandRepository) {
  }

  async execute(input: BrandUseCaseInput): Promise<BrandUseCaseOutput> {
    const brand = new Brand(input);
    await this.brandRepository.insert(brand);
    return brand.toJSON();
    //TODO: SOLID -> S - Single-responsibility Principle (Princípio da responsabilidade única)
  }
}
