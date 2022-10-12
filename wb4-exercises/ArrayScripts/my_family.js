//EXERCISE 1 / SLIDE 30 / PAGE 2-16
function getFamily(){
    return["Momma", "Duke", "Jay", "Kota", "Smokey"];

}

let myFamily = getFamily();
myFamily.push("Pops");

function showFamily(f){
    console.log("FAMILY: ", f);
}

myFamily.forEach(showFamily)