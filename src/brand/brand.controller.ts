import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CreateBrandDto} from './dto/create-brand.dto';
import {CreateBrandUseCase} from '../@core/application/brand/create-brand.use-case';
import {ListAllBrandsUseCase} from '../@core/application/brand/list-all-brands.use-case';
import {BrandControllerInterface} from '../@core/controller/brand/brand.controller.interface';
import {UpdateBrandUseCase} from '../@core/application/brand/update-brand.use-case';
import {UpdateBrandDto} from './dto/update-brand.dto';
import {DeleteBrandUseCase} from '../@core/application/brand/delete-brand.use-case';

@Controller('brand')
export class BrandController implements BrandControllerInterface {
  // constructor(private readonly brandService: BrandService) {}
  constructor(
    private createUseCase: CreateBrandUseCase,
    private listUseCase: ListAllBrandsUseCase,
    private updateUseCase: UpdateBrandUseCase,
    private delUseCase: DeleteBrandUseCase,
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

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto): {} {

    return this.updateUseCase.execute(id, updateBrandDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.delUseCase.execute(id);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.brandService.execute(id);
  // }
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

}
