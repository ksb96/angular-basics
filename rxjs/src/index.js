import { Observable } from 'rxjs'

const observable = new Observable((subscriber)=>{
    // subscriber.next('hi')
    // subscriber.error('error')
    // subscriber.next('test')
    // //manually terminating
    // subscriber.complete()
    // // subscriber.next('hello')
    
})

observable.subscribe({
    next: (value) =>{
        console.log(value)
    },
    error: (err)=>{
        console.error(err)
    }
})