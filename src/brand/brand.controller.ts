import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateBrandDto} from './dto/create-brand.dto';
import {CreateBrandUseCase} from '../@core/application/abr/brand/create-brand.use-case';
import {ListAllBrandsUseCase} from '../@core/application/abr/brand/list-all-brands.use-case';

@Controller('brand')
export class BrandController {
  // constructor(private readonly brandService: BrandService) {}
  constructor(
    private createUseCase: CreateBrandUseCase,
    private listUseCase: ListAllBrandsUseCase
  ) {
    // Constructor
  }

  @Post()
  create(@Body() createBrandDto: CreateBrandDto) { // Data Transfer Object
    return this.createUseCase.execute(createBrandDto);
  }

  @Get()
  findAll() {
    return this.listUseCase.execute();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.brandService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
  //   return this.brandService.update(+id, updateBrandDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.brandService.remove(+id);
  // }
}
