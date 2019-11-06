import { Observable } from 'rxjs';

const hello = Observable.create(function(observer) {
   observer.next('Hello');
   observer.next('World');
});

const subscribe = hello.subscribe(val => console.log(val));