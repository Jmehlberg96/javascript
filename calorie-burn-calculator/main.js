
//add variables to id's that need to be used in the script.
const weightInpt = document.querySelector('#weight-input');
const weightBtn = document.querySelector('#weight-button');
let kg = 0;
//add event listeners to the input buttons
weightBtn.addEventListener("click", () => {
    if (weightInpt.value !== ""){
        let weightLb = weightInpt.value;
        let weightKg = parseInt(weightLb) * 0.45359237;
        kg = Math.round(weightKg);
        console.log(kg);
        document.querySelector('#weight').innerHTML = kg;
    }   
});
//create variable and eventlistener for the activity field
const activityInpt = document.querySelector('#activity-input');
const activityBtn = document.querySelector('#activity-button');
let activity = "";
activityBtn.addEventListener("click", () =>{
    if (activityInpt.value !== ""){
        activity = activityInpt.value;
        console.log(activity);
        document.querySelector('#activity').innerHTML = activity;   
    }  
});

//create variables for MET and intensity field and eventlistener for the intensity field.
const intensityInpt = document.querySelector('#intensity-input');
const intensityBtn = document.querySelector('#intensity-button');
let met = 0;
let intensity = "";
intensityBtn.addEventListener("click", () =>{
    if (intensityInpt.value !== ""){
        intensity = intensityInpt.value;
        document.querySelector('#intensity').innerHTML = intensity;
        //call on the activity value and intensity value in the activityData dictionary to get the MET
        met = activityData[activity][intensity];
        console.log(met);
    }   
});
//create a object to hold all the MET data
const activityData =
    {
        //running
        "1":
        {
            "1": 6,
            "2": 8.3,
            "3": 9.8
        },
        //walking
        "2":
        {
            "1": 3,
            "2": 4.3,
            "3": 7
        },
        //bicycling
        "3": 
        {
            "1": 4,
            "2": 7,
            "3": 10
        },
        //swimming
        "4": 
        {
            "1": 5.3,
            "2": 7,
            "3": 9.8
        },
        //hiking
        "5": 
        {
            "1": 4,
            "2": 7,
            "3": 10
        },
        //resistance
        "6": 
        {
            "1": 3.5,
            "2": 5,
            "3": 6
        },
        //yoga
        "7": 
        {
            "1": 2,
            "2": 3.3,
            "3": 4
        },
        //yard word
        "8": 
        {
            "1": 2,
            "2": 4.3,
            "3": 5
        },
        //basketball
        "9": 
        {
            "1": 4.5,
            "2": 6,
            "3": 9.3
        },
        //football
        "10":
        {
            "1": 2.5,
            "2": 4,
            "3": 8
        }
    }
//create the variables and eventlistener for the minutes field
const timeInpt = document.querySelector('#time-input');
const timeBtn = document.querySelector('#time-button');
let time = "";
let results = 0;
timeBtn.addEventListener("click", () =>{
    if (timeInpt.value !== ""){
        time = timeInpt.value;
        document.querySelector('#time').innerHTML = time;
        //create the calculation to get the calories burned
        let calMin = ((met * 3.5) * kg)/200;
        let calBurn = calMin * parseInt(time);
        results = Math.round(calBurn);
        document.querySelector('#results').innerHTML = results;
    }   
});


//create the list of all the activities appending the activity-list1; activities 1-5
const liRunning = document.createElement('li');
const runningNode = document.createTextNode("1. Running");
liRunning.appendChild(runningNode);
document.querySelector('#activity-list1').appendChild(liRunning);

const liWalking = document.createElement('li');
const walkingNode = document.createTextNode("2. Walking");
liWalking.appendChild(walkingNode);
document.querySelector('#activity-list1').appendChild(liWalking);

const liBiking = document.createElement('li');
const bikingNode = document.createTextNode("3. Bicycling");
liBiking.appendChild(bikingNode);
document.querySelector('#activity-list1').appendChild(liBiking);

const liSwimming = document.createElement('li');
const swimmingNode = document.createTextNode("4. Swimming");
liSwimming.appendChild(swimmingNode);
document.querySelector('#activity-list1').appendChild(liSwimming);

const liHiking = document.createElement('li');
const hikingNode = document.createTextNode("5. Hiking");
liHiking.appendChild(hikingNode);
document.querySelector('#activity-list1').appendChild(liHiking);

//create the list of all the activities appending the activity-list2; activities 6-10
const liStrength = document.createElement('li');
const strengthNode = document.createTextNode("6. Resistance Training");
liStrength.appendChild(strengthNode);
document.querySelector('#activity-list2').appendChild(liStrength);

const liYoga = document.createElement('li');
const yogaNode = document.createTextNode("7. Yoga");
liYoga.appendChild(yogaNode);
document.querySelector('#activity-list2').appendChild(liYoga);

const liYard = document.createElement('li');
const yardNode = document.createTextNode("8. Yard Work");
liYard.appendChild(yardNode);
document.querySelector('#activity-list2').appendChild(liYard);

const liBasketball = document.createElement('li');
const basketballNode = document.createTextNode("9. Basketball");
liBasketball.appendChild(basketballNode);
document.querySelector('#activity-list2').appendChild(liBasketball);

const liFootball = document.createElement('li');
const footballNode = document.createTextNode("10. Football");
liFootball.appendChild(footballNode);
document.querySelector('#activity-list2').appendChild(liFootball);




   
