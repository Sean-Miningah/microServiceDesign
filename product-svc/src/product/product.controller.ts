import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ProductService } from './product.service';
// import { UpdateProductDto } from './dto/update-product.dto';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @GrpcMethod('ProductService', 'CreateProduct')
  createProduct(name: string, description: string, price: number, category: string) {

    console.log('name', name);
    console.log('description', description);
    console.log('price', price);
    console.log('category', category);

    return { 
      id: 2,
      responseInfo: {
        code: 200,
        message: 'Success',
      }
    };
  }

}
