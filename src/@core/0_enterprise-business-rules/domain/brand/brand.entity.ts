import crypto from 'crypto'
import {Entity} from './entity';

export type BrandProps = {
  name: string,
  description: string,
  createdAt?: Date | null,
  updatedAt?: Date | null,
  deletedAt?: Date | null
}

export class Brand extends Entity {
  id: string
  public props: Required<BrandProps>

  private constructor(props: BrandProps, id?: string) {
    super()
    this.id = id || crypto.randomBytes(16).toString('hex')
    if (!props) {
      this.props = {} as Required<BrandProps>
      return
    }
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),
      deletedAt: props.deletedAt || null
    }
  }

  static create(props: BrandProps, id?: string): Brand {
    return new Brand(props)
  }

  set name(name: string) {
    this.props.name = name
  }

  set description(description: string) {
    this.props.description = description
  }

  get name() {
    return this.props.name
  }

  get description() {
    return this.props.description
  }
}

