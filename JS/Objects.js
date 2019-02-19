//1 ----------> objects in JS are of referance type where as properties is of value type.
    //Declartion of the object
        let user = new Object();
        //or
        let userTemp = {};

//2 ----------> We can create an object by making it blank or by adding values to it
    let userNew = {
        firstName: "Neeraj",
        lastName: "Mishra",
        age: 30
    }

    console.log(userNew);
    // We can delete it using the delete command
    delete userNew.age;
    console.log(userNew);

    // We can add a new value using following
    userNew.age = 30;
    console.log(userNew);
