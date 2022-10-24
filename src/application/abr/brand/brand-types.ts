export type BrandUseCaseInput = {
  name: string,
  description: string,
  createdAt?: Date | null,
  updatedAt?: Date | null,
  deletedAt?: Date | null
}

export type BrandUseCaseOutput = {
  id: string,
  name: string,
  description: string,
  createdAt: Date | null,
  updatedAt?: Date | null,
  deletedAt?: Date | null
}
