import {interval} from 'rxjs';
import {take,takeLast,takeWhile} from 'rxjs/operators';

let source$ = interval(1000).pipe(take(5),takeLast(3),takeWhile((value,index)=>value<4));

source$.subscribe(v=>{console.log(v);})