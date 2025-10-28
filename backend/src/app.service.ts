import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schema/products.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class AppService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

  async findOne(id: string): Promise<Product | null> {
    return this.productModel.findById(id).exec();
  }

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async newProduct(newProduct: CreateProductDto) {
    const created = new this.productModel(newProduct);
    return created.save();
  }

  async deleteProduct(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }

}
