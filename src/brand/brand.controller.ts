import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {CreateBrandDto} from './dto/create-brand.dto';
import {CreateBrandUseCase} from '../@core/1_application-business-rules/application/brand/create-brand.use-case';
import {ListAllBrandsUseCase} from '../@core/1_application-business-rules/application/brand/list-all-brands.use-case';
import {BrandControllerInterface} from '../@core/2_interface-adapters/controller/brand/brand.controller.interface';
import {UpdateBrandUseCase} from '../@core/1_application-business-rules/application/brand/update-brand.use-case';
import {UpdateBrandDto} from './dto/update-brand.dto';

@Controller('brand')
export class BrandController implements BrandControllerInterface {
  // constructor(private readonly brandService: BrandService) {}
  constructor(
    private createUseCase: CreateBrandUseCase,
    private listUseCase: ListAllBrandsUseCase,
    private updateUseCase: UpdateBrandUseCase
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
