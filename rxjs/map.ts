import {interval} from 'rxjs';
import {map} from 'rxjs/operators';

class Vector2 {
    x:number;
    y:number;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
}

let count = 0;

let source$ = interval(1000).pipe(map(i=>{
    let x = Math.sin(i);
    let y = i;
    return new Vector2(x,y);
}));

source$.subscribe(v=>{console.log(v);})