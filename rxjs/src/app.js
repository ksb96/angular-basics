import { fromEvent } from 'rxjs';
import { of, from } from "rxjs";
import { map, pluck } from "rxjs/operators";

//creating operators(observable)
const observable = fromEvent(document, 'click')
const observableOne = of(1,2,3,4).pipe(
    map()
)

const observableTwo = fromEvent(document, 'keydown').pipe(
    map(event => event.code)
    // pluck('code')
    )

const subscription = observable.subscribe(
    console.log
)