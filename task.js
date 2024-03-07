"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
//Question 2:
var name = prompt("Whats your name?");
console.log("Hello " + name + ", would you like to learn some Python today?");
//Question 3:
var ename = prompt("Please enter your name:");
var upperCased = ename.toUpperCase();
var lowerCased = ename.toLowerCase();
console.log(upperCased);
console.log(lowerCased);
function toTitleCase(str) {
    return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}
var titleCased = toTitleCase(ename);
console.log(titleCased);
//Question 4:
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”");
//Question 5:
var speaker = "Albert Einstien";
console.log(speaker + " once said, “A person who never made a mistake never tried anything new.”");
//Question 6:
console.log("My name is Fatima" + "\n" + "I am 18 years old" + "\n" + "I am a Software Engineer");
//Question 7:
var addition = 4 + 4;
var subtraction = 12 - 4;
var multiplication = 4 * 2;
var division = 16 / 2;
console.log(addition + "\n" + subtraction + "\n" + multiplication + "\n" + division);
//Question 8:
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
//Question 9:
var favNum = 11;
console.log("My favourite Number is" + favNum);
//Question 10:
//My name is Fatima and you are reading this in a comment!
//Question 11:
var names = ["Fatima", "Maryam", "Qurat-ul-Ain", "Aqeel", "Talha"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
//Question 12:
var newNames = ["Fatima", "Maryam", "Qurat-ul-Ain", "Aqeel", "Talha"];
for (var i = 0; i < 5; i++) {
    console.log(newNames[i] + " is my good friend!");
}
//Question 13:
var carBrands = ["Audi", "Honda", "BMW", "Corolla", "Mercedes"];
for (var i = 0; i < 5; i++) {
    console.log("I would like to own a " + carBrands[i] + " car!");
}
//Question 14:
var guests = ["Mama", "Baba", "Bhayya"];
for (var i = 0; i < 3; i++) {
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
for (var i = 0; i < 3; i++) {
    console.log(guests[i] + " you are invited to dinner!");
}
//Question 16:
console.log("I have found a bigger dining table!");
//---------------------------------------------------------------------
guests.unshift("Baba");
for (var i = 0; i < 4; i++) {
    console.log(guests[i]);
}
//---------------------------------------------------------------------
guests.splice(2, 0, "Uncle");
for (var i = 0; i < 5; i++) {
    console.log(guests[i]);
}
//---------------------------------------------------------------------
guests.push("Aunty");
for (var i = 0; i < 5; i++) {
    console.log(guests[i]);
}
//---------------------------------------------------------------------
for (var i = 0; i < 5; i++) {
    console.log(guests[i] + ", you may come to dinner table ");
}
//Question 17:
console.log("Sorry my dinner table got short! Now,I may invite only 2 peoples!!");
for (var i = 2; i < 5; i++) {
    console.log(guests.pop() + ", sorry you may not come now!");
}
//---------------------------------------------------------------------
for (var i = 0; i < 5; i++) {
    console.log(guests[i] + ", you may come to dinner table ");
}
//---------------------------------------------------------------------
console.log("No one is invited Now!!!!!!!!");
guests.pop();
guests.pop();
guests.pop();
for (var i = 0; i < 5; i++) {
    console.log(guests[i]);
}
//----------------------------------------------------------------------
//Question 18:
var places = ["House", "University", "Institute", "Governer House", "Study Table"];
//----------------------------------------------------------------------
for (var i = 0; i < 5; i++) {
    console.log(places[i]);
}
//----------------------------------------------------------------------
places.sort();
//----------------------------------------------------------------------
for (var i = 0; i < 5; i++) {
    console.log(places[i]);
}
//----------------------------------------------------------------------
places.reverse();
for (var i = 0; i < 5; i++) {
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
var car = "Honda";
if (car == "Honda") {
    console.log("You entered correct car name!!");
}
else {
    console.log("You entered wrong car name!");
}
//Question 24:
var word = prompt("Please enter a word:");
if (word == "Fatima") {
    console.log("Yes it is your name!!");
}
else {
    console.log("No thats not your name!");
}
//----------------------------------------------
var num = prompt("Please enter a number:");
if (num > 0) {
    console.log("The number is positive");
}
else if (num < 0) {
    console.log("The number is negative ");
}
else {
    console.log("The number is zero!!");
}
//----------------------------------------------
if (num > 50 && num < 100) {
    console.log("the number is greater than 50 and less than 100");
}
else if (num > 0 && num < 50) {
    console.log("the number is less than 50 but greater than 0");
}
else {
    console.log("Please enter number between 1 - 100");
}
//----------------------------------------------
var myarray = ["Fatima", "Maryam", "Ainee", "Aqeel", "Talha"];
var find = prompt("Please enter a name you want to find in the array:");
for (var i = 0; i <= 5; i++) {
    if (myarray[i] == find) {
        console.log("Yess it is present in my array!! and it is present in index : " + i);
    }
}
//Question 25:
var alien_color1 = prompt("Please enter the color of the Alien:");
if (alien_color1 == "GREEN") {
    console.log("You have gained 5 points");
}
else {
    console.log("You have failedd!!");
}
//Question 26:
var alien_color2 = prompt("Please enter the color of the Alien:");
if (alien_color2 == "GREEN") {
    console.log("You have gained 5 points");
}
else {
    console.log("You have gained 10 points");
}
//Question 27 :
var alien_color3 = prompt("Please enter the color of the Alien:");
if (alien_color3 == "GREEN") {
    console.log("You have gained 5 points");
}
else if (alien_color3 == "YELLOW") {
    console.log("You have gained 10 points");
}
else if (alien_color3 == "RED") {
    console.log("You have gained 15 points");
}
else {
    console.log("You failed!!!!");
}
//Question 28:
var age = prompt("Please enter the age of person:");
if (age >= 0 && age <= 2) {
    console.log("The person is a baby!");
}
else if (age > 2 && age <= 4) {
    console.log("The person is a toddler");
}
else if (age > 4 && age <= 13) {
    console.log("The person is a kid");
}
else if (age > 13 && age <= 20) {
    console.log("The person is a teenager");
}
else if (age > 20 && age <= 65) {
    console.log("The person is an Adult");
}
else if (age > 65) {
    console.log("The person is an elder person");
}
else {
    console.log("Please enter a possible age!");
}
//Question 29:
var favorite_fruits = ["banana", "apple", "mango"];
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
var usernames = ["admin", "Eric", "John", "Alice", "Jane"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
//Question 31:
var usernames2 = ["admin", "Eric", "John", "Alice", "Jane"];
if (usernames2.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _a = 0, usernames_2 = usernames; _a < usernames_2.length; _a++) {
        var username = usernames_2[_a];
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
usernames2 = [];
if (usernames2.length === 0) {
    console.log("We need to find some users!");
}
//Question 32:
var current_users = ["john", "alice", "eric", "susan", "mike"];
var new_users = ["susan", "peter", "ALICE", "jane", "matt"];
var current_users_lowercase = current_users.map(function (username) { return username.toLowerCase(); });
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_user = new_users_1[_b];
    var new_user_lowercase = new_user.toLowerCase();
    if (current_users_lowercase.includes(new_user_lowercase)) {
        console.log("Sorry, ".concat(new_user, " is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations, ".concat(new_user, " is available."));
    }
}
//Question 33:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, numbers_1 = numbers; _c < numbers_1.length; _c++) {
    var number = numbers_1[_c];
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
//Question 34:
var pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
for (var _d = 0, pizzas_1 = pizzas; _d < pizzas_1.length; _d++) {
    var pizza = pizzas_1[_d];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I really love pizza!");
//Question 35:
var animals = ["Dog", "Cat", "Rabbit"];
for (var _e = 0, animals_1 = animals; _e < animals_1.length; _e++) {
    var animal = animals_1[_e];
    console.log(animal);
}
for (var _f = 0, animals_2 = animals; _f < animals_2.length; _f++) {
    var animal = animals_2[_f];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
//Question 36:
function make_shirt(size, message) {
    console.log("The shirt size is ".concat(size, " and it has the message: \"").concat(message, "\"."));
}
make_shirt("L", "I love coding!");
//Question 37:
function make_shirt2(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and it has the message: \"").concat(message, "\"."));
}
make_shirt2();
make_shirt2("Medium");
make_shirt2("Small", "Hello World!");
//Question 38:
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi", "Pakistan");
describe_city("London", "United Kingdom");
describe_city("New York");
//Question 39:
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
var city1 = city_country("Lahore", "Pakistan");
var city2 = city_country("Paris", "France");
var city3 = city_country("Tokyo", "Japan");
console.log(city1);
console.log(city2);
console.log(city3);
//Question 40:
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        tracks = tracks;
    }
    return album;
}
var album1 = make_album("Artist1", "Album1", 10);
var album2 = make_album("Artist2", "Album2");
var album3 = make_album("Artist3", "Album3", 15);
console.log(album1);
console.log(album2);
console.log(album3);
//Question 41:
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
show_magicians(magicians);
//Question 42:
function make_great(magicians) {
    for (var i_1 = 0; i_1 < magicians.length; i_1++) {
        magicians[i_1] = "the Great " + magicians[i_1];
    }
}
make_great(magicians);
show_magicians(magicians);
//Question 44:
function make_sandwich(items) {
    console.log("Sandwich order summary:");
    console.log("Bread");
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        console.log(item);
    }
    console.log("Bread");
    console.log("Enjoy your sandwich!\n");
}
make_sandwich(["Cheese", "Tomato", "Lettuce"]);
make_sandwich(["Ham", "Mustard"]);
make_sandwich(["Turkey"]);
//Question 45:
function store_car_info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car_info = { manufacturer: manufacturer, model: model };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var _b = extras_1[_a], key = _b[0], value = _b[1];
        car_info[key] = value;
    }
    return car_info;
}
var cars = store_car_info("Toyota", "Corolla", ["color", "red"], ["year", 2023]);
console.log(cars);
