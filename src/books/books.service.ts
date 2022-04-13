import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Book } from './interfaces/Book.interface';
import { CreateBookDTO } from './dto/Book.dto';
@Injectable()
export class BooksService {
    constructor(@InjectModel('BooksModel') private readonly booksModel: Model<Book>){}
        getBooks(){

        }
        
        getBook(){

        }

        createBook(){

        }

        deleteBook(){

        }

        updateBook(){
            
        }
}
