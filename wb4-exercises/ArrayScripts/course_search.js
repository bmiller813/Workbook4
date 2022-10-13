//EXERCISE 1 / SLIDE 36  / PAGE 2-23

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

let courseNames = ["PROG100", "PROG200", "PROG300", "PROG400", "PROG500"];

//Function that searches each section
function getCourseInfo(courseInfo) {
    for (let r = 0; r < courses.length; r++) {
        if (courseInfo == courses[r].CourseId) {
            console.log(courses[r].Title);
        } else {
            //console.log("You cracked the case!!!");
        }
    };
}

//test
//getCourseInfo("PROG100"); //THIS IS WORKING SO FAR

//main
for (let i = 0; i < courseNames.length; i++) {
    console.log(courseNames[i]);
    getCourseInfo(courseNames[i]);
}

