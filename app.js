// 1 Stwórz w zasięgu globalnym po jednej zmiennej każdego typu i przypisz im odpowiednie wartości

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



// 2a Stwórz następujące funkcje (każda z nich powinna zmieniać wartość jakiejś zmiennej zdefiniowanej w zasięgu globalnym):


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

// 2b Funkcja greet, która przyjmuje jeden parametr z domyślną wartością ‘This function’ i zwraca:
// Jeśli parametr ma typ String: wartość tekstową, która będzie połączeniem parametru z wartością ‘ mówi cześć!’
// Jeśli parametr nie ma typu String: wartość tekstową ‘Parametr musi być wartością tekstową’

function greet (x= "This function ") {


   if (typeof x ==='string') {
       console.log(x + "mowi cześć!")
    } else { console.log('‘Parametr musi być wartością tekstową')
}
};

greet();

// 2c Funkcję checkType, która przyjmuje jeden parametr i zwróci:
// wartość tekstową z nazwą typu jaki posiada podana w parametrze wartość np. ‘String’ lub ‘Number)
// tekst ‘brak parametru’ jeśli ten nie został podany


function checkType (x) {

let whatType = typeof x;
console.log(whatType);

if(x=== undefined) {
    console.log('brak parametru')
}  else { console.log("The type of variable is " + whatType)}


}

checkType(3);

// 2d  Funkcję sum, która przyjmuje jeden parametr i zwraca:
// jeśli parametr jest tablicą: sumę wszystkich wartości liczbowych z tablicy
// Jeśli parametr nie jest tablicą: ‘Podany parametr musi być tablicą’



let abc = [1,2,-1,3,];

function sum(arr) {

    let sum = 0;
    if (Array.isArray(arr) ===false) {
        console.log('not an array')
    } else if(Array.isArray(arr)) {
        console.log("it is an array")
    

    let numbersOnly = (val) => {
      if (typeof(val) === 'number') {      
        return val;
      }
    }
    let numbers = arr.filter(numbersOnly);
    
    for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

}
}

sum(abc);

// 2e Funkcję willThereBeEnoughSpace, która przyjmuje trzy parametry (zakładamy, że za każdym razem będą to liczby):


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


// 2f Funkcję runConditionally, która przyjmuje jeden parametr (załóżmy, że za każdym razem będzie to boolean) i zwraca:

let checkIfTrue = true;

function runConditionally(isTrue) {

    function handleTrue() {
        console.log('handling true!')
    }

    function handleFalse() {
        console.log("handling false!")
    }
    if (isTrue == true) {
        handleTrue();

    } else if(isTrue ==false) {
        handleFalse();
    }

}

runConditionally(checkIfTrue);
