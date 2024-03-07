import * as promptSync from 'prompt-sync';
const prompt =promptSync();
import * as readline from 'readline';

//Question 2:
const name = prompt("Whats your name?");
console.log("Hello "+name+", would you like to learn some Python today?");

//Question 3:
let ename = prompt("Please enter your name:");
let upperCased = ename.toUpperCase();
let lowerCased = ename.toLowerCase();

console.log(upperCased);
console.log(lowerCased); 

function toTitleCase(str: string): string {
    return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}

let titleCased = toTitleCase(ename);

console.log(titleCased);

//Question 4:
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”");

//Question 5:
let speaker = "Albert Einstien";
console.log(speaker+" once said, “A person who never made a mistake never tried anything new.”");

//Question 6:
console.log("My name is Fatima" + "\n" + "I am 18 years old"+"\n" + "I am a Software Engineer");

//Question 7:
let addition = 4+4;
let subtraction = 12-4;
let multiplication = 4*2;
let division = 16/2;

console.log(addition + "\n" + subtraction + "\n" + multiplication + "\n" + division);

//Question 8:
console.log(5+3);
console.log(5+3);
console.log(5+3);
console.log(5+3);

//Question 9:
let favNum = 11;
console.log("My favourite Number is" + favNum);

//Question 10:

//My name is Fatima and you are reading this in a comment!

//Question 11:
let names = ["Fatima","Maryam","Qurat-ul-Ain","Aqeel","Talha"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);

//Question 12:
let newNames = ["Fatima","Maryam","Qurat-ul-Ain","Aqeel","Talha"];

for(var i=0;i<5;i++){
    console.log(newNames[i] + " is my good friend!");
}

//Question 13:
let carBrands = ["Audi","Honda","BMW","Corolla","Mercedes"];
for(var i=0;i<5;i++){
        console.log("I would like to own a " +carBrands[i] + " car!");
     }

//Question 14:
let guests = ["Mama","Baba","Bhayya"];
for(var i=0;i<3;i++){
    console.log(guests[i] + " you are invited to dinner!");
}
//Question 19 started and ended in the middle:
console.log(guests.length + " Guestes are invited");
    
//Question 15:
//--------------------------------------------------------------------
console.log("Ohh Baba Couldn't make it! lets call sister in place of him!");
//--------------------------------------------------------------------
guests[1] = "Sister";
//--------------------------------------------------------------------
for(var i=0;i<3;i++){
    console.log(guests[i] + " you are invited to dinner!");
}

//Question 16:
console.log("I have found a bigger dining table!");
//---------------------------------------------------------------------
guests.unshift("Baba");
for(var i=0;i<4;i++){
    console.log(guests[i]);
}
//---------------------------------------------------------------------
guests.splice(2,0,"Uncle");
for(var i=0;i<5;i++){
    console.log(guests[i]);
}
//---------------------------------------------------------------------
guests.push("Aunty");
for(var i=0;i<5;i++){
    console.log(guests[i]);
}
//---------------------------------------------------------------------
for(var i=0;i<5;i++){
    console.log(guests[i] + ", you may come to dinner table ");
}

//Question 17:
console.log("Sorry my dinner table got short! Now,I may invite only 2 peoples!!");
for(var i=2;i<5;i++){
console.log(guests.pop() + ", sorry you may not come now!");
}
//---------------------------------------------------------------------
for(var i=0;i<5;i++){
    console.log(guests[i] + ", you may come to dinner table ");
}
//---------------------------------------------------------------------
console.log("No one is invited Now!!!!!!!!");
guests.pop();
guests.pop();
guests.pop();
for(var i=0;i<5;i++){
    console.log(guests[i]);
}
//----------------------------------------------------------------------

//Question 18:
let places = ["House","University","Institute","Governer House","Study Table"];
//----------------------------------------------------------------------
for(var i=0;i<5;i++){
    console.log(places[i]);
}
//----------------------------------------------------------------------
places.sort();
//----------------------------------------------------------------------
for(var i=0;i<5;i++){
    console.log(places[i]);
}
//----------------------------------------------------------------------
places.reverse();
for(var i=0;i<5;i++){
    console.log(places[i]);
}

//Question 20:


// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function takeInput(prompt: string): Promise<string> {
//     return new Promise((resolve, reject) => {
//         rl.question(prompt, (answer) => {
//             resolve(answer);
//         });
//     });
// }

// async function main() {
//     const sizeStr = await takeInput("Enter the size of the array: ");
//     const size = parseInt(sizeStr);

//     const array: string[] = [];

//     for (let i = 0; i < size; i++) {
//         const element = await takeInput(`Enter element ${i + 1}: `);
//         array.push(element);
//     }

//     for(var i=0;i<size;i++){
//         console.log(array[i]);
//     }
//     rl.close();
// }
// main();

//Question 21:

//Question 22:
//there is an error in print all the guests names when the list is empty!

//Question 23:
let car = "Honda";

if(car == "Honda"){
console.log("You entered correct car name!!");
}
else{
    console.log("You entered wrong car name!");
}

//Question 24:

const word = prompt("Please enter a word:");

if(word == "Fatima"){
    console.log("Yes it is your name!!");
}
else{
    console.log("No thats not your name!");
}

//----------------------------------------------
let num = prompt("Please enter a number:");
if(num >0){
    console.log("The number is positive");
}
else if (num <0){
    console.log("The number is negative ");
}
else{
    console.log("The number is zero!!");
}

//----------------------------------------------
if(num > 50 && num <100){
 console.log("the number is greater than 50 and less than 100");
}else if(num > 0 && num <50){
    console.log("the number is less than 50 but greater than 0");
}else{
    console.log("Please enter number between 1 - 100");
}

//----------------------------------------------
let myarray = ["Fatima","Maryam","Ainee","Aqeel","Talha"];
let find = prompt("Please enter a name you want to find in the array:");

for(var i=0;i<=5;i++){
 if(myarray[i] == find){
    console.log("Yess it is present in my array!! and it is present in index : " + i);
 }
}

//Question 25:
let alien_color1 = prompt("Please enter the color of the Alien:");
 if(alien_color1 == "GREEN"){
    console.log("You have gained 5 points");
 }
 else{
    console.log("You have failedd!!")
 }

//Question 26:
let alien_color2 = prompt("Please enter the color of the Alien:");
 if(alien_color2 == "GREEN"){
    console.log("You have gained 5 points");
 }
 else{
    console.log("You have gained 10 points");
 }

 //Question 27 :
 let alien_color3 = prompt("Please enter the color of the Alien:");
 if(alien_color3 == "GREEN"){
    console.log("You have gained 5 points");
 }
 else if(alien_color3 == "YELLOW"){
    console.log("You have gained 10 points");
 }
 else if(alien_color3 == "RED"){
console.log("You have gained 15 points");
 }
 else{
    console.log("You failed!!!!");
 }

 //Question 28:
 let age = prompt("Please enter the age of person:");

 if(age>=0 && age<=2){
console.log("The person is a baby!");
 }
 else if(age>2 && age<=4){
console.log("The person is a toddler");
 }
 else if(age>4 && age<=13){
console.log("The person is a kid");
 }
 else if(age>13 && age<=20){
console.log("The person is a teenager");
 }
 else if(age>20 && age<=65){
console.log("The person is an Adult");
 }
 else if(age>65){
console.log("The person is an elder person");
 }else{
    console.log("Please enter a possible age!");
 }

//Question 29:
const favorite_fruits: string[] = ["banana", "apple", "mango"];

if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}

if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes("grape")) {
    console.log("You really like grapes!");
}

//Question 30:
const usernames: string[] = ["admin", "Eric", "John", "Alice", "Jane"];

for (const username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

//Question 31:
let usernames2: string[] = ["admin", "Eric", "John", "Alice", "Jane"];

if (usernames2.length === 0) {
    console.log("We need to find some users!");
} else {

    for (const username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

usernames2 = [];

if (usernames2.length === 0) {
    console.log("We need to find some users!");
}

//Question 32:
const current_users: string[] = ["john", "alice", "eric", "susan", "mike"];
const new_users: string[] = ["susan", "peter", "ALICE", "jane", "matt"];

const current_users_lowercase: string[] = current_users.map(username => username.toLowerCase());

for (const new_user of new_users) {
    const new_user_lowercase: string = new_user.toLowerCase();

    if (current_users_lowercase.includes(new_user_lowercase)) {
        console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations, ${new_user} is available.`);
    }
}

//Question 33:
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}

//Question 34:
const pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

for (const pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");

//Question 35:
const animals: string[] = ["Dog", "Cat", "Rabbit"];

for (const animal of animals) {
    console.log(animal);
}

for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

//Question 36:
function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}".`);
}

make_shirt("L", "I love coding!");

//Question 37:
function make_shirt2(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}".`);
}

make_shirt2();
make_shirt2("Medium");
make_shirt2("Small", "Hello World!");

//Question 38:
function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi", "Pakistan");
describe_city("London", "United Kingdom");
describe_city("New York");

//Question 39:
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

const city1 = city_country("Lahore", "Pakistan");
const city2 = city_country("Paris", "France");
const city3 = city_country("Tokyo", "Japan");

console.log(city1);
console.log(city2);
console.log(city3);

//Question 40:
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    const album = { artist, title };
    if (tracks !== undefined) {
        tracks = tracks;
    }
    return album;
}

const album1 = make_album("Artist1", "Album1", 10);
const album2 = make_album("Artist2", "Album2");
const album3 = make_album("Artist3", "Album3", 15);

console.log(album1);
console.log(album2);
console.log(album3);

//Question 41:
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

show_magicians(magicians);

//Question 42:
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

make_great(magicians);
show_magicians(magicians);

//Question 44:
function make_sandwich(items: string[]): void {
    console.log("Sandwich order summary:");
    console.log("Bread");
    for (const item of items) {
        console.log(item);
    }
    console.log("Bread");
    console.log("Enjoy your sandwich!\n");
}

make_sandwich(["Cheese", "Tomato", "Lettuce"]);
make_sandwich(["Ham", "Mustard"]);
make_sandwich(["Turkey"]);

//Question 45:
function store_car_info(manufacturer: string, model: string, ...extras: [string, any][]): { manufacturer: string, model: string, [key: string]: any } {
    const car_info: { manufacturer: string, model: string, [key: string]: any } = { manufacturer, model };
    for (const [key, value] of extras) {
        car_info[key] = value;
    }
    return car_info;
}

const cars = store_car_info("Toyota", "Corolla", ["color", "red"], ["year", 2023]);

console.log(cars);








