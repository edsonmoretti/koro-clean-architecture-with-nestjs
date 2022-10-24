import {Brand} from './brand.entity';

describe('Entity Brand', () => {
  test('should create a brand with only name', async () => {
    const brand = new Brand({
      name: 'Nike',
      description: 'Nike is a brand'
    })
    expect(brand.props.id).toBeDefined()
    expect(brand.props.name).toBe('Nike')
  })
  test('should create a brand with all props', async () => {
    const brand = new Brand({
      name: 'Nike',
      description: 'Nike is a brand',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    })
    expect(brand.props.name).toBe('Nike')
    expect(brand.props.createdAt).toBeInstanceOf(Date)
    expect(brand.props.updatedAt).toBeInstanceOf(Date)
    expect(brand.props.deletedAt).toBeNull()
  })

  test('should update prop name', async () => {
      const brand = new Brand({
        name: 'Nike',
        description: 'Nike is a brand',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      })
      brand.name = 'Adidas'
      expect(brand.props.name).toBe('Adidas')
    }
  )
  test('should update prop description', async () => {
    const brand = new Brand({
      name: 'Nike',
      description: 'Nike is a brand',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    })
    brand.description = 'Adidas is a brand'
    expect(brand.props.description).toBe('Adidas is a brand')
  })
})

