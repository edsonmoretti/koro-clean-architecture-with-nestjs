export type BrandUseCaseInput = {
  name: string,
  description: string,
  createdAt?: Date | null,
  updatedAt?: Date | null,
  deletedAt?: Date | null
}

export type BrandUseCaseOutput = {
  name: string,
  description: string,
  createdAt: Date | null,
  updatedAt?: Date | null,
  deletedAt?: Date | null
}
