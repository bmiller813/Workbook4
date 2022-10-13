// EXERCISE 4 / SLIDE-31 / PAGE 2-17
let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];



/*
for (let r = 0; r < students.length; r++) {
    let stu = students[r];
    //console.log(stu);
    let total = 0;
    for (let c = 0; c < stu.scores.length; c++) {
        total += stu.scores[c];
    };
    console.log(stu.name, total / stu.scores.length);
};
*/

function stuAvg(stu) {
    let total = 0;
    for (let c = 0; c < stu.scores.length; c++) {
        total += stu.scores[c];
    };
    let avg = (total / stu.scores.length).toFixed(2);
    console.log(stu.name + ", Your Average: " + avg);
}

for (let r = 0; r < students.length; r++) {
    stuAvg(students[r]);
}