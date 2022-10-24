import {Brand} from '../../../domain/ebr/brand/brand.entity';
import {BrandRepository} from '../../../domain/ebr/repositories/brand.repository';

export class CreateBrandUseCase {

  constructor(private brandRepository: BrandRepository) {
  }

  async execute(input: CreateBrandUseCaseInput): Promise<CreateBrandUseCaseOutput> {
    const brand = new Brand(input);
    await this.brandRepository.insert(brand);
    return brand.toJSON();
    //TODO: SOLID -> S - Single-responsibility Principle (Princípio da responsabilidade única)
  }
}

type CreateBrandUseCaseInput = {
  name: string,
  description: string,
  createdAt?: Date | null,
  updatedAt?: Date | null,
  deletedAt?: Date | null
}

type CreateBrandUseCaseOutput = {
  id: string,
  name: string,
  description: string,
  createdAt: Date | null,
  updatedAt?: Date | null,
  deletedAt?: Date | null
}
