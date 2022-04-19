import { Controller,Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';;

import { Book } from './interfaces/Book.interface';
import { CreateBookDTO } from './dto/Book.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

  constructor(private booksService: BooksService){}
  
  @Post()
  async createBook(
      @Res() res,
      @Body() createBookDTO: CreateBookDTO
  ){
    const objBook = await this.booksService.createBook(createBookDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      mesage:'POST Done',
      data:objBook
    });
  }

  @Get()
  async getBooks(
      @Res() res,
  ){
    const arrBooks = await this.booksService.getBooks();
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      mesage:'GET Done',
      data:arrBooks
    });
  }

  @Get(':id')
  async getBook(
      @Res() res,
      @Param('id') param: string
  ){  
    const objBook = await this.booksService.getBook(param);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      mesage:'GET Done',
      data:objBook
    });
  }

  @Delete(':id')
  async deleteBook(
      @Res() res, 
      @Param('id') param: string
  ){
    const objBook = await this.booksService.deleteBook(param);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      mesage:'DELETE Done',
      data:{}
    });
  }

  @Put(':id')
  async updateBook(
      @Res() res,
      @Body() createBookDTO: CreateBookDTO,
      @Param('id') param: string
  ){
    const objBook = await this.booksService.updateBook(param, createBookDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      mesage:'PUT Done',
      data: objBook
    });
  }

}
