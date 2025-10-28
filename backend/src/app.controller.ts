import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getProducts() {
    return this.appService.getAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async createNewProduct(@Body() dto: CreateProductDto) {
    return this.appService.newProduct(dto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.appService.deleteProduct(id);
  }

}
