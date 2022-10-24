import {CreateBrandUseCase} from './create-brand.use-case';
import {BrandInMemoryRepository} from '../../../infra/fd/db/brand-in-memory.respository';

describe('CreateBrandUseCase', () => {
  it('should create a brand', async () => {
    const brandRepository = new BrandInMemoryRepository()
    const createBrandUseCase = new CreateBrandUseCase(brandRepository)
    const outputBrand = await createBrandUseCase.execute({
      name: 'Nike',
      description: 'Nike is a brand'
    })
    expect(brandRepository.brands).toHaveLength(1)
    expect(outputBrand).toStrictEqual({
      id: expect.any(String),
      name: 'Nike',
      description: 'Nike is a brand',
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
      deletedAt: null
    })
  })
})
