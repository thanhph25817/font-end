
// let userName
// document.getElementById("mySubmit").onclick=function(){
// userName=document.getElementById("myinput").value;
// console.log(userName)
// document.getElementById("showTen").textContent=`hello ${userName}`
// }

// document.getElementById("subMitRadius").onclick=function(){
//     let radius=document.getElementById("myText").value
//     radius=Number(radius)
//     console.log(radius)
//     dientich=radius*2;
//     document.getElementById("myValue").textContent=` my value is ${dientich} cm`    
// }

// 
// const deceaseBtn=document.getElementById("decrease")
// const inceaseBtn=document.getElementById("increast")
// const resetBtn=document.getElementById("reset");

// const countlabel=document.getElementById("countlabel")
// let count =0;

// deceaseBtn.onclick=function(){
//     count++
//     countlabel.textContent=count;
// }

// inceaseBtn.onclick=function(){
//     count--
//     countlabel.textContent=count;
// }

// resetBtn.onclick=function(){
//     count=0;
//     countlabel.textContent=count;
// }

//
// rolltn=document.getElementById("rollButton")
// labelrol=document.getElementById("labelroll")
// const min=1;
// const max=10;
// let randomNum

// rolltn.onclick=function(){
//     randomNum=Math.floor(Math.random()*max)/min;
//     labelrol.textContent=randomNum
// }

const mycheckBoxLabel=document.getElementById("myCheckBox")
const mycheckBoxBtn=document.getElementById("myCheckBox")

const labelVisa=document.getElementById("labelVisa")
const visaBtn=document.getElementById("visaBtn")

const labelPayPal=document.getElementById("labelPayPal")
const payPalBtn=document.getElementById("payPalBtn")
const subResult=document.getElementById("subResult")

const submitCheckBtn=document.getElementById("submitCheckBtn")

submitCheckBtn.onclick=function(){

    if(mycheckBoxBtn.checked){
        subResult.textContent='All check'
    }else{
        subResult.textContent='All no check'

    }
    if(visaBtn.checked){
        VisaResult.textContent='All check Visa'
    }else{
        VisaResult.textContent='All no check Visa'
    }

}

let day=1;
switch(day){
   case 1 :
    console.log('1');
     break;
}