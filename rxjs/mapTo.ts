import {interval} from 'rxjs';
import {mapTo} from 'rxjs/operators';

let source$ = interval(1000).pipe(mapTo("HElLO WORLD"));

source$.subscribe(v=>{console.log(v);})