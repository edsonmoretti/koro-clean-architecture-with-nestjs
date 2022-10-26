import {DataSource} from 'typeorm';
import {BrandSchema} from './brand.schema';
import {Brand} from '../../../../../domain/ebr/brand/brand.entity';

describe('BrandSchema', () => {
  test('create a brand', async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      entities: [BrandSchema],
      synchronize: true,
      logging: true
    })

    const brand = Brand.create({
      name: 'Nike',
      description: 'Nike is a brand'
    })
    await dataSource.initialize()
    const brandRepository = dataSource.getRepository(Brand)
    await brandRepository.save(brand)
    await expect(brand).toBeInstanceOf(Brand)
    const brandFound = await brandRepository.findOneBy({id: brand.id})
    await expect(brandFound.toJSON()).toStrictEqual(brand.toJSON())
  })
})
