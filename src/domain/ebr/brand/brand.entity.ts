import * as crypto from 'crypto';

export type BrandProps = {
  readonly id?: string
  name: string,
  description: string,
  createdAt?: Date | null,
  updatedAt?: Date | null,
  deletedAt?: Date | null
}

export class Brand {
  public props: Required<BrandProps>

  constructor(props: BrandProps) {
    this.props = {
      ...props,
      id: props.id || crypto.randomUUID(),
      description: props.description,
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),
      deletedAt: props.deletedAt || null
    }
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

  toJSON() {
    // S - Single-responsibility Principle (Princípio da responsabilidade única)
    // Poderia fazer um tipo? poderia, mas não é o caso para n afetar o S
    return this.props
  }
}

