//immediately Invoked Function Expresssion (IIFE) : 

(function chai() {
   //named iife
   console.log("DB Connected");
})();

((name) => {
    console.log(`DataBase Connected to ${name}`);
})("Gourav");
