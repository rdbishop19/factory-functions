console.log("I've been to Reno, Chicago, Fargo, Minnesota");

const metals = [
    { metal: "Sterling Silver", price: 12.42 },
    { metal: "14K Gold", price: 736.4 },
    { metal: "24K Gold", price: 1258.9 },
    { metal: "Platinum", price: 795.45 },
    { metal: "Platinum", price: 1241.0 }
]

const diamonds = [
    { carets: 0.5, price: 405 },
    { carets: 0.75, price: 782 },
    { carets: 1, price: 1470 },
    { carets: 1.5, price: 1997 },
    { carets: 2, price: 3638 }
]

const ringStyles = [
    { style: "Classic", price: 500 },
    { style: "Modern", price: 710 },
    { style: "Vintage", price: 965 }
]

const createCustomRing = (style, carets, metal) => {
    return {
        style: style.style,
        carets: carets.carets,
        metal: metals.metal,
        price: metal.price + style.price + carets.price
    }
}

const newRingOrder = createCustomRing(ringStyles[1], diamonds[2], metals[2])
// Then add order to customer's shopping cart

console.log(newRingOrder);

/* 
Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. 
The function should accept three arguments.

Doctor's name
Specialty (Oncologist, pediatrician, etc...)
Address of 
*/
const newDoctor = (name, specialty, address) => {
    return {
        name: name,
        specialty: specialty,
        address: address
    }
}

const drBob = newDoctor("Bob", "Teeth", "Medical Blvd.");
console.log(drBob);

/*
Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

Pet name
Pet breed
Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels
 */

 const newPet = (name, breed) => {
     return {
         name: name,
         breed: breed
     }
 }

 const maggie = newPet("Maggie", "Calico");
 console.log(maggie);