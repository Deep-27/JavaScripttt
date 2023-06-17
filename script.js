const country = "India";
const contininet = "Asia";
const population = "1.3 billion";
const language = "Hindi";

// console.log(country);
// console.log(contininet);
// console.log(population);

// let javaScript = true ;
// console.log(javaScript);


// console.log(typeof true);
// console.log(typeof country);
// console.log(typeof 69);

// let isIsland = false;
// let language = "Hindi";
// const finLand = " 6 million";

// console.log(typeof isIsland );
// console.log(country);
// console.log(typeof population );
// console.log(typeof language );

// console.log(population /2);
// console.log(population+1);
// console.log(population > finLand);
// console.log(population>33);
//  const description = country + " is in " + contininet + " and its " + population + " people speak " + language;

//  console.log(description);


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark/(heightMark*heightMark);
// const BMIJohn = massJohn/(heightJohn*heightJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn , markHigherBMI);

const firstname = "Pranjal";
const lastName = "Deep";
const birthYear = 2003;
const year = 2023;

const job = "Developer";

const pranjal = " I'm " +  firstname + " " + lastName + " a " + (year-birthYear) + " years old " + job + "!";
console.log(pranjal);


//LITERALS 
const pranjalNew = `I'm ${firstname} ${lastName} a ${year - birthYear} years old ${job}!`;
console.log(pranjalNew);

//multiple line without literals 
console.log('My name is Pranjal\n\
I\'m a developer\n\ of javascript');

// multiplpe lines with the literals 
console.log(`My name is Pranjal
I'm a developer
of a javascript`);


const description1 = `${country} is in ${contininet} and its ${population} million people speak ${language}`;
console.log(description1);

// if else statement

const age = 8;

if(age>=18){
    console.log("Pranjal can start driving 🚗");
}else {
    const yearLeft = 18- age;
    console.log(`Pranjal is too young to drive , wait another ${yearLeft} years :`);
}

const birthYear11= 2000;

let century;
if(birthYear11 <= 2000){
    century = 20;
}else {
    century = 21;
}
console.log(century);


// Assigment 2 

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);



// if(BMIJohn>BMIMark){
//     console.log(`John's BMI is higher than Mark's!`);
// }else {
//     console.log(`Mark's BMI is higher than John's!`);
// }

// const print1 = `Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`;
// const print2 = `Johns's BMI ${BMIMark} is higher than Mark's ${BMIMark}!`;

// if (BMIMark>BMIJohn){
//     console.log(print1);
// }else{
//     console.log(print2);
// }
