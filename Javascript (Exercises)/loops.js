/*
EXERCISE #1

The fizz buzz challenge: Fizz buzz is a common entry level challenge that interviewers use to quickly guage someone's program background. 
Print the numbers from 1 to 100 to the console, however for every number that is a multiple of 5 print the word fizz, for every number 
that is a multiple of 3 print buzz. If a number is both a multiple of 5 and 3 (like 15) print the word fizzbuzz. Hint: use if/else statements.
*/
var fizz = "fizz";
var buzz = "buzz";
for(var i = 1; i <= 100; i++){
    if (i%5 == 0 && i%3==0 ){
        console.log(i + " " + fizz + buzz);
    }
    else if (i%5==0){
        console.log(i + " " + fizz);
    }
    else if (i%3==0){
        console.log(i + " " + buzz);
    }
    else{
        console.log(i);
    }
}

/*
EXERCISE #2
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
*/
var str = "";
for(var i = 0; i < 8; i++){
    for (var j = 0; j < 8; j++){
        if(i%2==0){
            if(j%2==0){
                str = str + "#";
             }
            else{
                str = str + " ";
            }
        }
        else {
            if(j%2==0){
                str = str + " ";
             }
            else{
                str = str + "#";
            }
        }
    }
    str = str + "\n";
}
console.log(str);
