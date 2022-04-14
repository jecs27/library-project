import { Controller,Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';;

import { Book } from './interfaces/Book.interface';
import { CreateBookDTO } from './dto/Book.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

  constructor(private booksService: BooksService){}
  
  @Post()
  async createBookDTO(
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

}
