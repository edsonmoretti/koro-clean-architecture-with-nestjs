import {RouteInMemoryRepository} from './route-in-memory.respository';
import {Brand} from '../../domain/ebr/brand/brand.entity';

describe('RouteInMemoryRepository', () => {
  test('should create a brand and persist it', async () => {
    const brandRepository = new RouteInMemoryRepository()
    const brand = new Brand({
      name: 'Nike',
      description: 'Nike is a brand'
    })
    await brandRepository.insert(brand)
    expect(brandRepository.brands).toHaveLength(1)
    expect(brandRepository.brands).toStrictEqual([brand])
  })
})
