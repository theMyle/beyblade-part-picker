import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/ProductDB"),
  ],
  exports: [MongooseModule]
})
export class DatabaseModule { }
