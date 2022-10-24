import {RouteInMemoryRepository} from '../../../infra/f&d/route-in-memory.respository';
import {CreateBrandUseCase} from './create-brand.use-case';

describe('CreateBrandUseCase', () => {
  it('should create a brand', async () => {
    const brandRepository = new RouteInMemoryRepository()
    const createBrandUseCase = new CreateBrandUseCase(brandRepository)
    const outputBrand = await createBrandUseCase.execute({
      name: 'Nike',
      description: 'Nike is a brand'
    })

    expect(outputBrand).toStrictEqual({
      name: 'Nike',
      description: 'Nike is a brand',
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
      deletedAt: null
    })
    expect(brandRepository.brands).toHaveLength(1)
  })
})
