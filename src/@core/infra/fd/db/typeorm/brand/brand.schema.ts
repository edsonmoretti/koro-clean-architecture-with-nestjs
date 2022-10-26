import {EntitySchema} from 'typeorm';
import {Brand} from '../../../../../domain/ebr/brand/brand.entity';

export const BrandSchema = new EntitySchema<Brand>({
  name: 'Brand',
  target: Brand,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
    },
    name: {
      type: 'varchar',
      length: 255,
    },
    description: {
      type: 'varchar',
      length: 255,
    },
    createdAt: {
      type: 'date',
      createDate: true,
    },
    updatedAt: {
      type: 'date',
      updateDate: true,
    },
    deletedAt: {
      type:'date',
      nullable: true,
    }
  }
})
