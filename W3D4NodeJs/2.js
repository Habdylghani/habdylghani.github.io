const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });


   var res = 0;
   function getNumber() {
       readline.question('Enter a number: ', number => {
            if (number !== 'stop') {
                res += parseInt(number);
                getNumber();
            }
            else {
                console.log(`the sum is: ${res}`);
                readline.close();
            }
       });
   }

   getNumber();

   