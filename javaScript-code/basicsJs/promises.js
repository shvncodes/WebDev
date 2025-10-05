// class Promise {
//     constructor(callback){
//         callback(
//         (data)=>{
//             console.log("Resolve ka method");
//         }, 
        
//         () => {
//             console.log("Reject ka method")
//         })
//     }
// }


// Promise: Async operation ka completion(both fullfilled or rejected) hona

const promiseData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5)
    }, 4000)
})


// promise chain
promiseData.then((data) => {
    console.log("data is",data)
    return -1;
}).then((res) => {
    console.log("Mujhe bhi mil gya data",res)
})

console.log(promiseData)