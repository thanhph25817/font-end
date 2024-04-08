
//array.map()

let numbers=[1,2,3,4,5]
// let squares=numbers.map(square)
let squaress=numbers.map(square)
console.log(squaress)
// squares.forEach(print)

function square(numbers){
    return Math.pow(numbers,2)
}

function print(element){
    console.log(element)
}
//array.filter() : tạo mới một array với tất cả thuộc tính 
// mà đã qua điều kiện trong một function 
let ages=[8,6,7,5];

let ass=ages.filter(checkAge)

ass.forEach(element=>{
    console.log(element)
})
 
function checkAge(ages){
    return ages>=7;
}

//array.reduce() : biến một array thành một giá trị duy nhất 

let prices=[1,23,2,55]

let totals=prices.reduce(checkOut)
 
console.log(`the total is $ ${totals}`)


function checkOut(prices,total){
        return total+prices
}

let grades=[43,100,50,80,1]

grades.sort((x,y)=>{y-x ; console.log("asas")
})
.forEach((grades)=>{
    console.log(grades)
})

// excersise 

let cards=["A","2","3","4","5","6","7","8","9","10","j","q","k"]

shuffer(cards); 

cards.forEach(card=>console.log(card))


function shuffer(array){
    let currentIndex=array.length

    while(currentIndex!=0){
        let randomInex=Math.floor(Math.random() * array.length)
        currentIndex-=1;

        let temp=array[currentIndex]
        array[currentIndex]=array[randomInex]
        array[randomInex]=temp;
    }
    return array;
}


let userName="thanh";
let userIndox=0; 

login();
function login(){
    displayUserName();
    displayUserNameBox();

    function displayUserName(){
        console.log(`Welcome ${userName}`)
    }
    function displayUserNameBox(){
        console.log(`You have ${userIndox}`)
    
    }
} 

//Map : giống trong java 

const store=new Map([
    ["t-shirt",20],
    ["t-shirt1",201],
    ["t-shirt2",202],
    ["t-shirt3",203],
]).forEach((value,key)=>{
    console.log(`${key} $${value}`)
}).get("t-shirt")

let shoppingCart=0;
shoppingCart+=store
console.log(shoppingCart)
