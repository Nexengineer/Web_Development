//1 --------> Map, Set, WeakMap and WeakSet

// Till this point we have learned about the complex data structure Link
/*  Objects for stored Keyed collections
    Array for Storing ordered collections

    Now we are going to study about MAP and SET
*/

//2 --------> Map
    // Declaration: Best thing about map is we can make anything as a key
        let map = new Map();
        map.set('1','str1');
        map.set(1, 'number1');
        map.set(true, 'bool1');

        // alert( map.get(1) ); // 'num 1'
        // alert(map.get(true)); // 'bool1'

    // We can use even object for key in map
        let john = {name: 'john'};
        let visitsCountMap = new Map();
        visitsCountMap.set(john, 1);
    
        //alert(visitsCountMap.get(john)); 
    
    // We can intialize map with multiple values
        let recipeMap = new Map([
            ["Milk", 500],
            ["Water", 250],
            ["Flour", 150]
        ]);

    // To iterate over the map we can use
        // Below is for assessing the keys
        for(let items of recipeMap.keys()){
            // alert(items);
        }

        // Below is for assessing the values
        for(let item of recipeMap.values()){
            // alert(item);
        }

        // Below is for assessing key and values
        for (let item of recipeMap.entries()){
            // alert(item);
        }

        // Finally we have that commonly used
        recipeMap.forEach( (value, keys, map) => {
            // alert(`${keys}: ${value} : ${map}`);
        })

//3 --------> Set
    // Like all the languages we have set in JS also.
    // Declaration
        let set = new Set();
        let john1 = {name: 'john'}
        let mary = {name: 'mary'}
        let dick = {name: 'dick'}

        set.add(john1);
        set.add(mary);
        set.add(dick);
        // Trying to duplicate the values
        set.add(john1);
        set.add(mary);
        set.add(dick);

        // alert(set.size);
        // All other iteration method is same as Map;

//4 --------> WeakSet and Weak Map
        // It is similar to that of Set and Map but they doesnt prevent Javascript
        // from delete it
        // Other differance is we can only use object as a key in weakmap unlike
        // primitive types which can be used in map for keys.




