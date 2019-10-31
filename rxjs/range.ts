import { range } from 'rxjs';
import { map } from 'rxjs/operators';

let source$ = range(1,10).pipe(map((v,i)=>{return Math.random()*10}))
source$.subscribe(v=>{console.log(v)})