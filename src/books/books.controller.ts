import { Body, Controller,Get, Post, HttpCode, Delete, Param, Put } from '@nestjs/common';;
import { CreateBook } from './dto/create-book.dto';
import { Request, Response } from 'express';

@Controller('books')
export class BooksController {

  @Get()
  getBooks(): string {
    return 'Controller Books';
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
