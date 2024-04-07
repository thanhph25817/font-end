
let temp=document.getElementById("inputTem").value
let ra=document.getElementById("Caridus")
let fa=document.getElementById("fager")
let bt=document.getElementById("converBtn")
let show1=document.getElementById("show")

 let a;
function toCaridus(temp){
return (temp -32) * (5/9)
}

function toFaherit(temp){
return (temp*9/5 + 32)
}

bt.onclick=function(){
    if(ra.checked){
        temp=Number(temp)
        temp=toCaridus(temp)
       show1.innerHTML=temp+ "C"
    }else if (fa.checked){
        temp=Number(temp)
        temp=toFaherit(temp)
       show1.innerHTML=temp+ "F"
    }else{
     show1.innerHTML="select a init"       
    }
}