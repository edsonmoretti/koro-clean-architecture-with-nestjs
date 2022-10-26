import {Brand} from '../../../0_enterprise-business-rules/domain/brand/brand.entity';
import {BrandRepositoryInterface} from '../../../0_enterprise-business-rules/domain/repositories/brand.repository.interface';
import {BrandUseCaseOutput} from './brand-types';

//TODO: SOLID -> S - Single-responsibility Principle (Princípio da responsabilidade única)
export class ListAllBrandsUseCase {

  constructor(private brandRepository: BrandRepositoryInterface) {
  }

  async execute(): Promise<BrandUseCaseOutput[]> {
    const brands = await this.brandRepository.findAll();
    return brands.map(brand => brand.toJSON());
  }
}
