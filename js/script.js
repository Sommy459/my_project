// function myfunction(name){
//     return "My name is "+ name;
// }
// let fname=myfunction("Somto")

// console.log(fname)

// let mydiv = document.getElementById("name");
// mydiv.innerHTML = fname

// // arrow function method
// let myfun = (names) => {
//     return "My name is " + names;
// }
// let name3 = myfun("Joy");
// console.log(name3);

// function utilityBill(unit){
//     const ppu = 245;
//     let bill = ppu * unit
//     return "Your bill is " + bill;
// }
// let newbill =utilityBill(23)
// console.log(newbill);

// let get = document.getElementById("bill");
// get.innerHTML = newbill;

// let utilbill = (unit) =>{
//     const price_per_unit =245;
//     let bill = price_per_unit * unit;
//     return "Your bill is " +bill;
    
// }
// let n = utilbill(10);
// console.log(n)

const showNameBtn=document.getElementById("Displayname");
showNameBtn.addEventListener("click",function(e){
    e.preventDefault();
    // console.log("Button has beem clicked");
    const inputname = document.getElementById("myname");
    let inputval = inputname.value;
    console.log(inputval);
    let outputError = "";
    let output ="";
   if(inputval === ''){
    console.log("name cannot be empty");
    inputname.style.border = "1px solid red";
    outputError = document.getElementById("nameoutError");
    outputError.innerHTML = "name cannot be empty";
    output.innerHTML = '';
   }else{
    inputname.style.border = '1px solid green';
    console.log("correct guy...");
    output = document.getElementById("nameout")
    outputError = document.getElementById('nameoutError');
    output.innerHTML = inputval;
    outputError.innerHTML= "";
   }

}
)
const Btn=document.getElementById("Displayname");
showNameBtn.addEventListener("click",function(f){
    f.preventDefault();
    // console.log("Button has beem clicked");
    const outputname = document.getElementById("ass");
    let outputval = outputname.value;
    console.log(outputval);
    let inputError = "";
    let input ="";
   if(outputval === ''){
    console.log("phone cannot be empty");
    outputname.style.border = "1px solid red";
    inputError = document.getElementById("ass1");
    inputError.innerHTML = "phone cannot be empty";
    input.innerHTML = '';
   }else{
    outputname.style.border = '1px solid green';
    console.log("nice...");
    input = document.getElementById("ass2")
    outputError = document.getElementById('ass1');
    input.innerHTML = outputval;
    inputError.innerHTML= "";
   }

}
)
const Btn2=document.getElementById("Displayname");
Btn2.addEventListener("click",function(a){
    a.preventDefault();
    const outputname = document.getElementById("okay");
    let outputval = outputname.value;
    console.log(outputval);
    let inputError = "";
    let input ="";
   if(outputval === ''){
    console.log("passord cannot be empty");
    outputname.style.border = "1px solid red";
    inputError = document.getElementById("okay3");
    inputError.innerHTML = "password cannot be empty";
    input.innerHTML = '';
   }else{
    outputname.style.border = '1px solid green';
    console.log("nice...");
    input = document.getElementById("okay4")
    outputError = document.getElementById('okay3');
    input.innerHTML = outputval;
    inputError.innerHTML= "";
   }

}
)
const Btn3=document.getElementById("Displayname");
Btn3.addEventListener("click",function(a){
    a.preventDefault();
    const outputname = document.getElementById("you");
    let outputval = outputname.value;
    console.log(outputval);
    let inputError = "";
    let input ="";
   if(outputval === ''){
    console.log("adress cannot be empty");
    outputname.style.border = "1px solid red";
    inputError = document.getElementById("you1");
    inputError.innerHTML = "adress cannot be empty";
    input.innerHTML = '';
   }else{
    outputname.style.border = '1px solid green';
    console.log("nice...");
    input = document.getElementById("you2")
    outputError = document.getElementById('you1');
    input.innerHTML = outputval;
    inputError.innerHTML= "";
   }

}
)
const Btn4=document.getElementById("Displayname");
Btn4.addEventListener("click",function(a){
    a.preventDefault();
    const outputname = document.getElementById("em");
    let outputval = outputname.value;
    console.log(outputval);
    let inputError = "";
    let input ="";
   if(outputval === ''){
    console.log("email cannot be empty");
    outputname.style.border = "1px solid red";
    inputError = document.getElementById("em1");
    inputError.innerHTML = "email cannot be empty";
    input.innerHTML = '';
   }else{
    outputname.style.border = '1px solid green';
    console.log("nice...");
    input = document.getElementById("em2")
    outputError = document.getElementById('em1');
    input.innerHTML = outputval;
    inputError.innerHTML= "";
   }

}
)

function litre(price){
    const litre_price = 1500;
    let p = price/litre_price
    return "litre = " + p
}
let newprice = litre(50000)
console.log(newprice)
let x = document.getElementById("litre")
x.innerHTML = newprice


