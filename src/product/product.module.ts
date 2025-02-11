import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SAN_PHAM, SAN_PHAMSchema } from './schema/product.schema';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { DeletedProductCodeModule } from './deletedProductCode/deleteProductCode.module';
import { ReviewModule } from '../review/review.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SAN_PHAM.name, schema: SAN_PHAMSchema },
    ]),
    DeletedProductCodeModule,
    ReviewModule,
  ],
  controllers: [ProductController],
  providers: [ProductService, CloudinaryService],
})
export class ProductModule {}
