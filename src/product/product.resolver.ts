import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';

@Resolver(Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(()=>Product)
  create(@Args('createProductInput') createProductInput: CreateProductInput) {
    return this.productService.create(createProductInput);
  }

  @Query(()=>[Product])
  findAll() {
    return this.productService.findAll();
  }

  @Query(()=>Product)
  findOne(@Args('id') id: number) {
    return this.productService.findOne(id);
  }

  @Mutation(()=>Product)
  update(@Args('updateProductInput') updateProductInput: UpdateProductInput) {
    return this.productService.update(updateProductInput.id, updateProductInput);
  }

  @Mutation(()=>Product)
  remove(@Args('id') id: number) {
    return this.productService.remove(id);
  }
}
