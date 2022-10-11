//EXERCISE 1 / SLIDE-13 / PAGE 1-9 = Print Address Object AKA label_maker.js
function printContact(contactInfo){
    console.log(contactInfo.name);
    console.log(contactInfo.address);
    console.log(contactInfo.city + ",", contactInfo.state, contactInfo.zip);
}
//TEST
let myInfo = { name: "Pursalane Faye", address: "121 Main Street", city: "Atlanta", state: "GA", zip: "30083" };

printContact(myInfo);