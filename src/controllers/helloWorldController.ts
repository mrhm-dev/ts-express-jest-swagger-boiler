import { Controller, Route, Get, Tags } from 'tsoa';

@Route('hello-world') // route name => localhost:xxx/helloWorld
@Tags('HelloWorldController') // => Under HelloWorldController tag
export class HelloWorldController extends Controller {
    @Get() //specify the request type
    hello(): HelloWorldInterface {
        return { message: 'Hello World!' };
    }
}
export interface HelloWorldInterface {
    message: string;
}
