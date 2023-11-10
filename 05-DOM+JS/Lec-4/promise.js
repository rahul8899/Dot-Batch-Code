// let promiseObject = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         console.log("you are inside promise");
//     },1000)
//     console.log("you are inside promise 2");
//     resolve(2323);
// })

// console.log("outside data ");

let waada1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("set timeout 1 started")
    }, 2000);
    // resolve(true);
    reject();
})

let output = waada1.then(() => {
    let waada2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("set timeout 2 started")
        }, 3000);
        resolve("wada 2 resolve");
    });
    return waada2
}, () => { console.log("error is there") })

output.then((value) => { console.log(value) });

