import { Body, Controller,Get, Post, HttpCode, Delete, Param, Put } from '@nestjs/common';;
import { CreateBook } from './dto/create-book.dto';

import { Book } from './interfaces/Book';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

  constructor(private booksService: BooksService){}
  
  @Get()
  getBooks(): Book[] {
    return this.booksService.getBooks();
  }

  @Get(':bookId')
  getBook(
    @Param('bookId') bookId
  ): Book {
    return this.booksService.getBook(parseInt(bookId));
  }

  @Post()
  createBook(
      @Body() req: CreateBook
  ): {} {
      return {
          statusCode: 201,
          mesage:'POST Done',
          data:{}
      };
  }

  @Delete(':id')
  deleteBook(
      @Param('id') id
  ):{}{

    return {
        statusCode: 200,
        mesage:`DELETE Done ${id}`,
        data:{}
    };
  }

  @Put(':id')
  updateBook(
      @Param('id') id,
      @Body() req: CreateBook
  ):{}{

    return {
        statusCode: 200,
        mesage:`UPDATE Done ${id}`,
        data:{}
    };
  }
}
