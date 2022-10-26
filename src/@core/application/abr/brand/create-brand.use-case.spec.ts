import {CreateBrandUseCase} from './create-brand.use-case';
import {BrandInMemoryRepository} from '../../../infra/fd/db/in-memory/brand/brand-in-memory.respository';
import {Brand} from '../../../domain/ebr/brand/brand.entity';

describe('CreateBrandUseCase', () => {
  it('should create a brand', async () => {
    const brandRepository = new BrandInMemoryRepository()
    const createBrandUseCase = new CreateBrandUseCase(brandRepository)
    const outputBrand = await createBrandUseCase.execute({
      name: 'Nike',
      description: 'Nike is a brand'
    })
    expect(brandRepository.brands).toHaveLength(1)
    expect(outputBrand.id).toBeDefined()
    expect(outputBrand).toBeInstanceOf(Brand)
  })
})
