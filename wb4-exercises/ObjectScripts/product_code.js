//EXERCISE 2 / SLIDE-14 / PAGE 1-10 / 
function parsePartCode(text) {
    /*
    const supplier = text.slice(0, text.indexOf(":"));
    const number = text.slice(text.indexOf(":")+1, text.indexOf("-")); //THIS IS ONE WAY TO DO IT
    const size = text.slice(text.indexOf("-")+1)
    */
    return {
        /*supplierCode: supplier,
        productNumber: number,  //THIS IS PART OF THE "THIS IS ONE WAY TO DO IT"
        size: size,*/
        supplierCode: text.slice(0, text.indexOf(":")),
        productNumber: text.slice(text.indexOf(":") + 1, text.indexOf("-")),
        size: text.slice(text.indexOf("-") + 1)
    }


}
//TEST
let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode + " Product Number: " + part1.productNumber + " Size: " + part1.size);