// 1

let isTrue = true;
let null0 = null;
let undefinedVariable;
let numero = 1;
let stringString = "4";
let sym1 = Symbol("Sym");
let o = {
    firstName: "Michal",
    lastName: "Michalski",
    age: 23 ,
    hairColor: "red"
};

let num2  = 10;



// 2a

function add (num1,num2) {

 if (typeof num2 === 'undefined' || typeof num1 === 'undefined') {
    console.log('Musisz podać dwie liczby')
    
  }
   else if (isNaN(num1) || isNaN(num2)) 
{   
      console.log("Parametry muszą być liczbami")
  } 
  else {
      num1 = parseInt(num1);
  num2 = parseInt(num2);
      console.log(num1 + num2);
  }


};
 

add(2,2);

// 2b

function greet (x= "This function ") {


   if (typeof x ==='string') {
       console.log(x + "mowi cześć!")
    } else { console.log('‘Parametr musi być wartością tekstową')
}
};

greet();

// 2c

function checkType (x) {

let whatType = typeof x;
console.log(whatType);

if(x=== undefined) {
    console.log('brak parametru')
}  else { console.log("The type of variable is " + whatType)}


}

checkType(3);

// 2d


let abc = [1,2,323];

function sum(arr) {

    let sum = 0;
    if (Array.isArray(arr) ===false) {
        console.log('not an array')
    } else if(Array.isArray(arr)) {
        console.log("it is an array")
    
        for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

}
}

sum(abc);

// 2e

function willThereBeEnoughSpace(cap, on, wait) {
 let maxCap = cap - 1;
 let onTheBus = on - 1;
 let waiting = wait;

 console.log("cap is " + cap)
 console.log("people on the bus " + onTheBus)
 console.log('waiting ' + waiting)
 if (waiting < (maxCap-onTheBus)) {
    console.log("there is enough space")
    return true;
 } else {
    console.log('there is not enough space')
    return false;
 }

 

}

willThereBeEnoughSpace(100, 49,50);


// 2f

let checkIfTrue = false;

function runConditionally(isTrue) {

    if (isTrue == true) {
        console.log("it is true")

    } else if(isTrue ==false) {
        console.log("it is false")
    }

}

runConditionally(checkIfTrue);
