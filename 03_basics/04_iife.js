// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('pratik')

//To get rid of variables which are having global scope
Encapsulation of Code:

    Avoid Global Scope Pollution: By wrapping your code inside an IIFE, you can avoid polluting the global scope with variables and functions, thereby reducing the risk of conflicts with other scripts.