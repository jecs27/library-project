import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller'; 
//Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schemas/book.schema';
@Module({
    imports: [MongooseModule.forFeature([{name: 'BookFeature', schema: BookSchema}])],
    providers: [BooksService],
    controllers: [BooksController],
})
export class BooksModule {}
