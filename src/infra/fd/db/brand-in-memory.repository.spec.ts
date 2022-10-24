import {Brand} from '../../../domain/ebr/brand/brand.entity';
import {BrandInMemoryRepository} from './brand-in-memory.respository';

describe('BrandInMemoryRepository', () => {
  test('should create a brand and persist it', async () => {
    const brandRepository = new BrandInMemoryRepository()
    const brand = new Brand({
      name: 'Nike',
      description: 'Nike is a brand'
    })
    await brandRepository.insert(brand)
    expect(brandRepository.brands).toHaveLength(1)
    expect(brandRepository.brands).toStrictEqual([brand])
  })
})
