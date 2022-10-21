const readline1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });

   readline1.question('What is your name? ', name => {
    console.log(`Welcome ${name}`);
    readline1.question('What is your age? ', age => {
        if(age < 16) {console.log("You're not allowed to drive in Iowa.");}
        else {console.log("You're allowed to drive in Iowa");}
        readline1.close();
       });
   });

   