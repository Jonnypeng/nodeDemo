import { Observable } from 'rxjs';

const hello = Observable.create(function(observer) {
//   observer.next('Hello');
//   observer.next('World');
console.log(2);
});

//const subscribe = hello.subscribe(val => console.log(val));