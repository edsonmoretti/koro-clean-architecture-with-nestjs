import {Brand} from '../../../0_enterprise-business-rules/domain/brand/brand.entity';
import {BrandRepositoryInterface} from '../../../0_enterprise-business-rules/domain/repositories/brand.repository.interface';
import {BrandUseCaseInput, BrandUseCaseOutput} from './brand-types';

export class CreateBrandUseCase {

  //TODO: SOLID -> I - Interface Segregation Principle (Princípio da Segregação de Interfaces)
  // Estou dependendo do "contrato", dependo da interface e não da implementação
  constructor(private brandRepository: BrandRepositoryInterface) {
  }

  async execute(input: BrandUseCaseInput): Promise<Brand> {
    const brand = Brand.create(input);
    await this.brandRepository.insert(brand);
    return brand;
    //TODO: SOLID -> S - Single-responsibility Principle (Princípio da responsabilidade única)
  }
}
