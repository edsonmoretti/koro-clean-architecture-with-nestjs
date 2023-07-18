import {
  BrandRepositoryInterface
} from '../../domain/repositories/brand.repository.interface';

export class DeleteBrandUseCase {

  constructor(private brandRepository: BrandRepositoryInterface) {
  }

  async execute(id: string): Promise<boolean> {
    return await this.brandRepository.delete(id);
  }
}
