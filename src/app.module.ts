import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { UsersController } from './users/users.controller';
import { BooksService } from './books/books.service';
import { BooksModule } from './books/books.module';

@Module({
  imports: [BooksModule],
  controllers: [AppController, BooksController, UsersController],
  providers: [AppService, BooksService],
})
export class AppModule {}
