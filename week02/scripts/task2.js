/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = "Jennifer Mehlberg";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = myName;

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
let myImage = 'images/myImage.jpg';
let altText = 'image of me'

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').src = myImage;
document.querySelector('img').alt = altText;



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoriteFoods = ['Mexican', ' Indian', ' Italian', ' American'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = favoriteFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
let anotherfood = ' Chinese';

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFoods.push(anotherfood);

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = favoriteFoods;

// Step 6: remove the first element in the favorite foods array
favoriteFoods.shift();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favoriteFoods;

// Step 8: remove the last element in the favorite foods array
favoriteFoods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favoriteFoods;


