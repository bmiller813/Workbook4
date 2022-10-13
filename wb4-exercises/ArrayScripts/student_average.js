// EXERCISE 4 / SLIDE-31 / PAGE 2-17
let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
    ];

        

        
    for(let r=0; r<students.length; r++){
        //console.log(students[r]);
        let total = 0;
        for(let c=0; c<students[r].scores.length; c++){
            total += students[r].scores[c];
        };
        console.log(students[r].name , total / students[r].scores.length);
    };

    function stuAvg(){
        let tot = 0;
        let avg = 0;
        for(let x=0; x<students[r].scores.length; x++){
            total += students[r].scores[c];
        };
    }