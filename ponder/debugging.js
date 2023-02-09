const PI = 3.14;
let area = 0;

function circleArea(radius){
    //code to complete our task
    const area = radius * radius * PI;
    return area;
}

area = circleArea(3);
console.log("Area1:",area);

area = circleArea(4);
console.log("area2:", area)