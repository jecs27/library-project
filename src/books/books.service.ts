import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/Book';


@Injectable()
export class BooksService {

    books:Book[] = [
        {
            id:1,
            isbn: 1,
            title: 'string;',
            description: 'string',
            category: 1,
            year_published: '1900',
            publishin_house_id:1
        },
        {
            id:2,
            isbn: 2,
            title: 'string;',
            description: 'string',
            category: 1,
            year_published: '1900',
            publishin_house_id:1
        },
        {
            id:3,
            isbn: 3,
            title: 'string;',
            description: 'string',
            category: 1,
            year_published: '1900',
            publishin_house_id:1
        }
    ];
    

    getBooks(): Book[]{
        return this.books;
    }

    getBook(id: number): Book {
        return this.books.find(book => book.id === id)
    }
}
