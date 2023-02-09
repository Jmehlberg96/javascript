/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
    const myInfo = {
        // Step 2: Inside of the object, add a property named name with a value of your name as a string
        name: 'Jennifer Mehlberg',
        // Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
        photo: "images/myimage.jpg",
        // Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
        favoriteFoods: ['Mexican', ' Indian', ' Italian', ' American'],
        // Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
        hobbies: ['Quilting', 'Hiking', 'Sewing', 'Reading', 'Cooking'],
        // Step 6: Add another property named placesLived with a value of an empty array
        placesLived: [

            // Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
            // Step 8: For each property, add appropriate values as strings
            // Step 9: Add additional objects with the same properties for each place you've lived
            {place:"Saint George, UT", length:"3 months"},
            {place:"Gilbert, AZ", length:"3 years"},
            {place:"Taylor, AZ", length:"2 years"},
            {place:"Gallatin, MO", length:"6 years"}
        ],
    }

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <;> element with an ID of name
document.querySelector("#name").textContent = myInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').src = myInfo.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").alt = myInfo.name;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let myFoods = document.querySelector("#favorite-foods");

myInfo.favoriteFoods.forEach(food => {
    let listItem = document.createElement('li');
    listItem.textContent = food;
    // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    myFoods.append(listItem);

});
// Step 6: Repeat Step 4 for each hobby in the hobbies property
let myHobbies = document.querySelector("#hobbies");

myInfo.hobbies.forEach(hobby => {
    let listItem = document.createElement('li');
    listItem.textContent = hobby;
    // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    myHobbies.append(listItem);
});
// Step 8: For each object in the <em>placesLived</em> property:
for(let i = 0; i < myInfo.placesLived.length; i++){
    let places = myInfo.placesLived[i];
    // - Create an HTML <dt> element and put its place property in the <dt> element
    let placeName = document.createElement('dt');
    placeName.innerHTML = places.place;
    // - Create an HTML <dt> element and put its place property in the <dt> element
    let placeLength = document.createElement('dd');
    placeLength.innerHTML = places.length;
    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    document.querySelector('#places-lived').appendChild(placeName);
    document.querySelector('#places-lived').appendChild(placeLength);
};

