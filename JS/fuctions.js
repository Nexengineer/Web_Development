// How to declare functions in Javascript.

//1--------> This is the generic declaration of the fuction.(Function Declartion)
function sayHi(){
    alert("My Name is Neeraj Kumar Mishra.");
}

//sayHi()

//2--------> we can assign the function to the variable also.(Function Expression)
let sayHi2 = function(){
    alert("Hello");
};

//alert(sayHi2); // ------> This will print function defination
// sayHi2(); // ---------> This will excecute what is inside the function


//3--------> we can pass the function as an argument and as well as asssign it.
function sayHi3(){
    alert("Hello");
}

let func = sayHi3;
// sayHi3()
// func()

//4--------> In JS we can Pass the function as a parmater they are called  call back functions
function askQuestion(question, yes, no){
    if(confirm(question)) yes();
    else no();
}
    // Short hand notation of the same method mentioned above.
    


function showOk(){
    alert("User pressed Ok!");
}

function showCancel(){
    alert("User pressed Cancel!");
}
// askQuestion("Are you a motherFucker?",
//         function(){alert("He agreed he is a mother fucker.")},
//         function(){alert("I think he is an asshole")})
//askQuestion("Are you an Asshole?", showOk, showCancel);

//5--------> In JS we have one more type of function which is callled arrow  functions.
// General example of an arrow function.
let sum = (a,b) => {
    alert(a+b);
};

// sum(10, 20);

// Samples to solve
let ask = (question, yes, no) => {
    if(confirm(question)) yes()
    else no();
}

ask("Hello Mother fucker", ()=>{alert("User said HI!")}, ()=>{alert("He said fuck you!")});