import { prop, getModelForClass } from '@typegoose/typegoose';

export class Book {
    @prop()
    public name?: string;

    @prop()
    public author?: string;

    @prop()
    public price?: number;
}

const BookModel = getModelForClass(Book);

export default BookModel;
