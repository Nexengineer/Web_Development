// Recursion -----------> When we iteratively call a function again and again.

// A simple example -----------> Here we are going to find the power of a number using recursion

function pow(number, power) {
    if (power == 1) {
        console.log("number",number)
        return number;
    } else {
        console.log("power",power)
        console.log("number",number)
        return number * pow(number, power - 1)
    }
}

// alert(pow(2,3));

//-----------> We will be recursing through the whole structure
let company = {
    sales: [{name:"a", salary:1500}, {name:"b", salary:1500}],
    development :{
        sites:[{name:"i", salary:1500}, {name:"j", salary:1500}],
        internals: [{name:"x", salary:1500}, {name:"y", salary:1500}]
    }
}

function sumSalaries(deparment) {
    if(Array.isArray(deparment)) { 
        return deparment.reduce((prev,current) => prev + current.salary,0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(deparment)){
            sum += sumSalaries(subdep);
        }
        return sum;
    }
}

// alert(sumSalaries(company));