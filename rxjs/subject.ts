import { Subject } from 'rxjs';

interface value {
    wheel: number;
    isRight: boolean;
}

let subject = new Subject<value>();

subject.subscribe(v => {
    console.log(v);
}, null, () => {
    console.log("over");
})

subject.next({
    wheel: 1,
    isRight: true
});

setTimeout(() => {
    subject.next({
        wheel: 2,
        isRight: false
    });
}, 3000);

setTimeout(() => {
    subject.next({
        wheel: 3,
        isRight: false
    });
}, 7000);

setTimeout(() => {
    subject.complete()
}, 10000);

