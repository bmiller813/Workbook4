//USE A FUNCTION TO CREATE AN OBJECT

//like a constructor, it builds an object from parts
function createPayStub(id, name, payRate){
    //{creates an object "literal" (value without a name)}
    return{ id:id, name:name, payRate:payRate}//OBJECT
}
let output = createPayStub(123, "Bryan", 100);
console.log(output.name + " gets $" + output.payRate);

//LOOPS
let limit = 0;
let start = 10;

while (start > limit) { //boolean expression
    //HAPPENS 0 OR MORE TIMES
    console.log("COUNTDOWN: " + start);
    start--; //decrement - decrease by 1
} //loop

//fall out of loop when while expression is false
console.log("BLAST OFF!")

//do while
let num = 1;
let i = 1;
do { //REPEAT AT LEAST ONCE
    //GUARANTEED TO HAPPEN ONCE
    num = num * 2; //DOUBLE THE VALUE
    console.log("DO: ", i, num); //DISPLAY NUM
    i++; //INCREMENT - COUNT UP
} while (i < 5)

//WE CAN DO THE SAME THING IN FEWER LINES OF CODE WITH A FOR LOOP
let value = 1;

for (let i = 0; i < 5; i++) {
    value = value * 2; //DOUBLE EVERY TIME
    console.log("WHILE VALUe: ", i, value);
}


//BREAKING OUT IN THE MIDDLE
let n = 1;
let index = 1;
while(index < 100){
    n = n * 2;
    console.log("BREAK ME: " + index, n);
    if (n >= 100){
        break;
    }
    index++;
}
console.log("BROKEN OUT! (before index reaches 100")