
//creating an array and making it into a list in html using .map Map is a great way to change each item
//in an array somehow. It returns a new array and does not modify the original array.
const number = ['one', 'two', 'three'];
//syntax for .map
const numberHtml = steps.map(function (step){return `<li>${step}</li>`;});
document.getElementById('myList').innerHTML = numberHtml.join();

//Taking an array and converting it to numbers using .map
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade){
    let points = 0;
    if (grade ==="A") {
        points = 4;
    }
    else if (grade === "B");{
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints)


//using .reduce to get the average of a total of all items in array
const gpa = gpaPoints.reduce((total, item ) => total + item ) / gpaPoints.length;

//using .filter to return a new array of elements that pass a test in the function or callback 
//that you set up (it ieterates through a list using parameters you declare) in this case
// keeping only words in the list that are longer than 6 characters.
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortWords = fruits.filter((word) => word.length < 6);

// using .indexOf to get the first index at which an element can be found or -1 if it is not present.

const myArray = [12, 34, 21, 54];
const luckyNum = 21;
let luckyIndex = myArray.indexOf(luckyNum);


    