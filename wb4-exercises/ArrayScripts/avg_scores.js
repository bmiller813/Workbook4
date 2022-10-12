//EXERCISE 2 / SLIDE 30 / PAGE 2-16
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores){
let totalAdd = 0;
finalSum = 0;

for (let i = 0; i < scores.length; i++) { 
    totalAdd += scores[i];
    finalSum = (totalAdd / scores.length).toFixed(2);
    
};

console.log("AVERAGE SCORE: " + finalSum);
}

getAverage(myScores);
getAverage(yourScores);