//EXERCISE 1 / SLIDE 30 / PAGE 2-16
function getFamily(family){
    return["Momma", "Duke", "Jay", "Kota", "Smokey"];

}

let myFamily = getFamily();

function showFamily(f){
    console.log("FAMILY: ", f);
}

myFamily.forEach(showFamily)