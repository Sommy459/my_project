"use strict"

function greet(){
    // let greeting = "Hello World"
}
greet();
console.log("Hello JavaScript");
document.getElementById("me").innerHTML="Hello JavaScript"

function say_name(){};
say_name();
console.log("Egbuji Somtochuku");
document.getElementById("say_name").innerHTML = "Egbuji Somtochuku";

function num(){
    let sum = 500;
    return 500;
}
num();
console.log(num(500));
document.getElementById("num").innerHTML=500;


function somto(){
    let somto = "Hello Somto"
    return "Hello Somto"
}
console.log(somto("hello somto"));
document.getElementById("hello_somto").innerHTML = "Hello Somto";

function area_lenght(a,b){
    let area  = a + b;
    return a + b
}
area_lenght();
console.log(area_lenght(20,30))
function area_of_trap(a,b,c){
    let trap = a*b*c
    return a*b*c
}
area_of_trap();
console.log(area_of_trap(0.5,50,10));
document.getElementById("cal").innerHTML = "Area =1/2 * (a+b) * h "
document.getElementById("cal2").innerHTML = "a =20 , b=30 , h=10"
document.getElementById("cal3").innerHTML = "Area = 1/2*(30+20)* 10"
document.getElementById("cal4").innerHTML = "Area = 0.5*50* 10"
document.getElementById("cal5").innerHTML = "Area = 250 cm^2";

function c_f(a,b){
    let c = a*b
    return a*b
}
c_f();
console.log(c_f(9/5,25))
function final(a,b){
    let f = a+b
    return a+b
}
console.log(final(45,32))
document.getElementById("cal6").innerHTML = "F=9/5 * C + 32 "
document.getElementById("cal7").innerHTML = "c=32"
document.getElementById("cal8").innerHTML = "F = 9/5*32+ 10"
document.getElementById("cal9").innerHTML = "F = 45+32"
document.getElementById("cal10").innerHTML = "F = 77";

function g_kg(grams){
    return grams/1000
}
console.log(g_kg(500))
document.getElementById("g").innerHTML = "kg=g/1000"
document.getElementById("g1").innerHTML = "g=500"
document.getElementById("g2").innerHTML = "kg=500/1000"
document.getElementById("g3").innerHTML = "kg=0.5"

function larg(a,b){
    if (a>b){
        return a;
    }
}
larg();
console.log(larg(20,10))
document.getElementById("l").innerHTML="The larget numer = 20"

function low(a,b){
    if (a>b){
        return b;
    }
}
low();
console.log(low(20,10))
document.getElementById("low").innerHTML="The lowest numer = 10"

function numbers(num){
    if (num>0){
        return "positive"
    }else if(num<0){
        return "Negative"
    }else{
        return "Zero"
    }

}
console.log(numbers(10));document.getElementById("hmm").innerHTML = "if num>0 = positive"
console.log(numbers(-10));document.getElementById("hmm1").innerHTML = "if num<0 = Negative"
console.log(numbers(0));document.getElementById("hmm2").innerHTML = "if num is nothing = zero"


