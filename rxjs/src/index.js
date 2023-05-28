import { Observable } from 'rxjs'

const observable = new Observable((subscriber)=>{
    //sync code
    // subscriber.next('hi')
    // subscriber.error('error')
    // subscriber.next('test')
    // //manually terminating
    // subscriber.complete()
    // subscriber.next('hello')
    
    //asyn code
    const clear = setInterval(()=>{
        subscriber.next('test')
    }, 1000)
    // subscriber.complete()

    //avoiding memory-leak(release memory)
    return()=>{
        clearInterval(clear)
    }
})

const subscription = observable.subscribe({
    next: (value) =>{
        console.log(value)
    },
    error: (err)=>{
        console.error(err)
    }
})
//unsubscribe
setTimeout(()=>{
    subscription.unsubscribe()
}, 4000)