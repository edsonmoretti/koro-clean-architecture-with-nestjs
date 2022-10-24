// Sim, na domain, ela é agnóstica ao framework
import {Brand} from '../brand/brand.entity';
export interface BrandRepository {
  insert: (brand: Brand) => Promise<void>
}

// TODO: SOLID -> D - Dependency Inversion Principle (Princípio da inversão de dependência)
// A "lib" que vai ter que implementar a interface BrandRepository
