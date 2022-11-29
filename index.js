const readfile = require('read-excel-file/node');

const readline = require("readline");
readfile('./Database.xlsx').then((rows)=>{ 
    let arr = rows;
    const rline = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

     
    let userInput;
   
    rline.question("Please enter the text \n", function (string) {
    userInput = string.split(" ");

   
    for(let i = 0;i<userInput.length;i++){
        for(let j = 0;j<arr.length;j++){
    
           
                if(userInput[i]==arr[j]){
                    console.log(userInput[i]);
                }
         
          }
    }
   
    rline.close();
    });
});