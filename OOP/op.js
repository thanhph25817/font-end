

//setInterval()

// let count =0;
// let max=window.prompt("count up to what")
// max=Number(max);

// const myTime=setInterval(countUp,1000)

// function countUp(){
//     count+=1;
//     console.log(count)
//     if(count>=max){
//         clearInterval(myTime);
//     }
// }

//promise
const promise=new Promise((resolve,reject)=>{

});


async function loadFile(){
    let fileLoaded=true

if(fileLoaded){
    return "file load"
}else{
    throw "not loaded"
}
}
loadFile().then(value=>console.log(value)).catch
