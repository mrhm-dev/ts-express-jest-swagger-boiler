import { Controller, Route, Get, Tags, Example } from 'tsoa';
import { BookModel } from '../models';
import { Book } from '../models/book-model';

@Route('books')
@Tags('BookController')
export class BookController extends Controller {
    @Example<Book[]>([
        {
            name: 'tsoa user',
            author: 'HM Nayem',
            price: 100,
        },
    ])
    @Get()
    async find(): Promise<Book[]> {
        const books = await BookModel.find();
        return books;
    }
}
