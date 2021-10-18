console.log('hello');
//alert('yooooooooo');

//Variables:
var b="smoothie";
console.log(b);

var someNumber = 45;
console.log(someNumber);

document.getElementById('someText').innerHTML = 'hey there';

//var age = prompt('What is your age?');
//document.getElementById('someText').innerHTML = age;

//Numbers & operations
var num1 = 10;
//increment 
num1++;
//decrement
num1--;
console.log(num1); 
//divide & multiply & remainder
console.log(num1 / 2); 
//multiply 
console.log(num1 * 4); 
//remainder
console.log(num1 % 3); 

//increment & decrement by any number you want
num1 +=20;
console.log(num1); 

num1 -=20;
console.log(num1);

//create the function
function fun(){
    console.log('this is a function'); 
}
//call the function
fun();

/*create the funtion that take in a name &
 says hello followed by your name
 Name : Nama'
 Return : Hello Nama' */
 function greeting(){
     var name = prompt('What is your name?');
     var result = 'Hello '+ name; // String conatenation
     console.log(result);
 }
 //greeting();

 //function greeting with parameter 
 function greeting(yourName){
    var result = 'Hello '+ yourName; // String conatenation
    console.log(result);
}
//var name = prompt('What is your name?');
//greeting(name);


 //how do arguments work in functions?
 //How do we add 2 numbers together in a function?
function  sumNumbers(num1 , num2){
    var result = num1 + num2;
    console.log(num1 , num2);
}
sumNumbers(10,10);
//sumNumbers('10','10');
// sumNumbers('Hello ','Nama ');

//While loops 
/* 
var num = 0;
while (num <100){
    num +=1;
    console.log(num);
}
*/

//for loops
for (let num=0 ; num <= 100 ; num++)
{
    console.log(num);
}

//Data types
let yourAge = 18; //number 
let yourName = 'Nama';// string
let name = {first: 'Nama' , last:'Salameh'} //object
let truth = false; // boolean
let groceries = ['apple','banana','orenges'] //array
let random; // undefined
let nothing = null; // value null

//strings in js (common methods)
let fruit = 'banana,apple,orange';
let moreFruits ='banana\napple'; // new line --> \n
console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban' ,'123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); //split by a comma 
console.log(fruit.split('')); //split by a character

//Arrays in js
let fruits = ['banana' , 'apple' , 'orange' ,'pineapples'];
//let fruits = new Array('banana' , 'apple' , 'orange' ,'pineapples');
console.log(fruits[2]); //access value at index 2ed
fruits[0] = 'pear';
console.log(fruits);

for(let i=0 ; i<fruits.length ; i++){
    console.log(fruits[i]);
}

//array common methods
console.log('to string', fruits.toString());
console.log(fruits.join('-'));
console.log(fruits,fruits.pop(),fruits); //remove
console.log(fruits.push('blackberries'),fruits); //append
console.log(fruits[3]);
fruits[fruits.length]='new fruit';
//fruits[4]='new fruit';
console.log(fruits);
fruits.shift(); //remove first element
console.log(fruits);
fruits.unshift('kiwi'); //add first element
console.log(fruits); 
let vegetables = ['asparagus' , 'tomato' , 'brocoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);

console.log(allGroceries.slice(1,4)); 
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let sumNumber = [2,4,6,8,12,45,82,1,4];
console.log(sumNumber.sort(function(a,b){return a-b}));
console.log(sumNumber.sort(function(a,b){return b-a}));

//console.log(sumNumbers);

//full the empty Array using for loop
let emptyArray = new Array();
for (let num =0 ; num < 10 ; num++){
    emptyArray.push(num);
}
console.log(emptyArray);


//objects in js
let student = {first: 'rahaf',
               last:'sama' ,
               age:20 ,
               hieght:155,
               studentInfo : function(){ return this.first + '\n' + this.last + '\n' +this.age;}
            };
console.log(student.first);
console.log(student.last);
student.first = 'not Rahaf'; //CHANGE VALUE
console.log(student.first);
student.age++; //Increment
console.log(student.age);
console.log(student.studentInfo()); //print first & last & age

//conditionals , control flows (if else)
//18_35 is my target demographic

let age =45;
//let age = prompt('what is your age? ')
if ((age>=18) && (age <=35)){
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}

//switch statment
//didderentiate between weekday vs. weekend
// day 0 is sunday -->weekend 
// day 1 is monday  -->weekday
// day 2 is Tuesday-->weekday
// day 3 is Wednesday -->weekday
// day 4 is thursday  -->weekday
// day 5 is Friday -->weekend
// day 6 is saturday -->weekend 
switch(2){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}
console.log(text);

//