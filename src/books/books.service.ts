import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Book } from './interfaces/Book.interface';
import { CreateBookDTO } from './dto/Book.dto';

@Injectable()
export class BooksService {
    constructor(@InjectModel('BookFeature') private readonly bookModel: Model<Book>){}
        
    async getBooks(): Promise<Book[]>{
        const arrBooks =  await this.bookModel.find();
        return arrBooks;
    }
    
    async getBook(bookID: string): Promise<Book>{
        const objBook = await this.bookModel.findById(bookID);
        return objBook;
    }

    async createBook(createBookDTO: CreateBookDTO): Promise<Book>{
        const objBook = new this.bookModel(createBookDTO);
        await objBook.save();
        return objBook;
    }

    async deleteBook(bookID: string): Promise<Book>{
        const objBook = await this.bookModel.findByIdAndDelete(bookID);
        return objBook;
    }

   async updateBook(bookID: string, createBookDTO: CreateBookDTO): Promise<Book>{
       const objBook = await this.bookModel.findByIdAndUpdate(bookID, createBookDTO, {new: true}); //para que devuelva el objeto nuevo
       return objBook;
    }
}
