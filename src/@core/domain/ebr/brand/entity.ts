export class Entity {
  id: string
  props

  protected constructor(...args) {
    // Constructor
  }

  static create(props, id?: string){
    return new this(props, id)
  }

  set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt
  }

  set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt
  }

  set deletedAt(deletedAt: Date) {
    this.props.deletedAt = deletedAt
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props
    }
  }
}

