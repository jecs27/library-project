import { Controller,Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';;
import { CreateBookDTO } from './dto/Book.dto';

import { Book } from './interfaces/Book.interface';
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
  CreateBookDTO(
      @Res() res,
      @Body() createBookDTO: CreateBookDTO
  ): {} {
    console.log(createBookDTO);
    
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      mesage:'POST Done',
      data:createBookDTO
    });
  }

  @Put(':id')
  updateBook(
      @Param('id') id,
      @Body() createBookDTO: CreateBookDTO
  ):{}{

    return {
        statusCode: 200,
        mesage:`UPDATE Done ${id}`,
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
}
