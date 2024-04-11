import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { v4 as UuidV4 } from 'uuid';

@Injectable()
export class ProductsService {
  private product: Product[] = [];

  create(createProductDto: CreateProductDto) {
    const { name, description, price } = createProductDto;

    const product = new Product(UuidV4(), name, description, price);

    this.product.push(product);
    return product;
  }

  findAll() {
    return this.product;
  }

  findOne(id: string): Product {
    const product = this.product.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException('Product not found ');
    }

    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const { id: __, name, description, price } = updateProductDto;

    const product = this.findOne(id);

    product.updateWith({ name, description, price });

    return product;
  }

  remove(id: string): Product {
    const product = this.findOne(id);
    this.product = this.product.filter((product) => product.id !== id);
    return product;
  }
}
