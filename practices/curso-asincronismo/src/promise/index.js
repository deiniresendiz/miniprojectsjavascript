const promise = new Promise(function (resolve, reject){
    resolve('hey')
})

const cows = 15;

const countCows = new Promise(function(resolve, reject){
    if(cows > 10){
        resolve('More than 10 cows');
    }else{
        reject('Less than 10 cows');
    }
})


countCows.then((result)=>{
    console.log(result)
}).catch ((error)=>{
    console.log(error)
 }).finally(()=>console.log('finally'))