export interface BrandControllerInterface {
  create: (brand: any) => {};
  findAll: () => {};
  update: (id: string, brand: any) => {};
  delete: (id: string) => {};
}
