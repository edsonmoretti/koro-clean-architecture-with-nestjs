import {BrandInMemoryRepository} from './brand-in-memory.respository';
import {Brand} from '../../../../../0_enterprise-business-rules/domain/brand/brand.entity';

describe('BrandInMemoryRepository', () => {
  test('should create a brand and persist it', async () => {
    const brandRepository = new BrandInMemoryRepository()
    const brand = Brand.create({
      name: 'Nike',
      description: 'Nike is a brand'
    })
    await brandRepository.insert(brand)
    expect(brandRepository.brands).toHaveLength(1)
    expect(brandRepository.brands).toStrictEqual([brand])
  })
})
