// var bottlesOfBeer = 99;
// while (bottlesOfBeer >= 1) {
//     console.log (bottlesOfBeer + ' bottles of beer on the wall');
//     bottlesOfBeer = bottlesOfBeer - 9;
// }


//Create a variable for cookies.
//start with 20 cookies
//console.log each statement for when a cookie gets eaten.
//until there are no more cookies
//the cookies get eaten 2 at a time.

// var cookies = 20;
// while (cookies >= 0) {
//     console.log (cookies + ' cookies in a jar');
//     cookies = cookies - 2;
// }


// //will count 1 to 10
// for (var i = 1; i <= 10; i++) {
//     console.log (i); 
// }
	
	//Count from 1 to 50
// for (var i = 1; i <= 50; i++) {
//     console.log (i);       
//     //Says 'Buzz' after multiples of three
//     if (i % 3 == 0) {
//         console.log (' Buzz');
//     }        
//     //Says 'Bang' after multiples of five
//     if (i % 5 == 0) {
//         console.log (' Bang');
//     }
// }
// // 					

// function timesNine(number) {
// 	alert(9 * number);

// }
// timesNine(1);
// timesNine(2);
// timesNine(3);
// timesNine(4);
// timesNine(5);
// timesNine(6);
// timesNine(7);

// //
// for (var i = 1; i <= 7; i++)   {   
// (i  * 9) 
// console.log (i);
// }

// for(var i=1; i<=7; i++){
// 	console.log(i * 9);
// }

//var favoriteFoods = ["pasta", "burrito", "enchilada", "fries", "burger"]

// console.log(favoriteFoods);
// favoriteFoods.push("whiskey");
// console.log(favoriteFoods);

// console.log(favoriteFoods[2]);

// for(var i=0; i < favoriteFoods.length; i++){
// 	console.log(favoriteFoods[i]);
// }

// var favoriteAnimals = ["cats", "dogs", "african grey parrots", "goats", "pigs"];

// for (var index=0; index<favoriteFoods.length; index++) {
// 	console.log(favoriteFoods[index] + " and " + favoriteAnimals[index])
// }

// var dianeSinger = {
// 	hometown: "Dallas, TX",
// 	hair: "black",
// 	age: 40,
// 	glasses: false,
// 	pets: ["fish", "dog", "pig"]
// }
// // alert(dianeSinger ["hometown"]);
// // alert(dianeSinger.hair);

// var userRequest = prompt("what do you want to know?");
// alert(dianeSinger[userRequest]);

// .dianeSinger.gender ="female"

// var recipe = {
// 	recipeTitle: "Chocolate Torte",
// 	servings: 6,
// 	ingredients: ["flour", "sugar", "cocoa", "butter", "cream"]
// }

// alert("the ingredients for " + recipe.recipeTitle + " are " + recipe.ingredients);

//  for (var index=0; index<recipe.ingredients.length; index++) {
// 	console.log(recipe.ingredients[index])}


	// Create an object to hold some information about an animal. Call your object "aboutAnimal" and include some properties such as color, habitat, favorite food, name.
var goat = {
  habitat: "farm",
  food: "cans",
  age: 6,
  rectangularpupils: true,
  name: "Temptation"
}
//Then use var userRequest = prompt() to prompt the user: What do you want to know about this animal? You might indicate which qualities they can ask about.
var userRequest = prompt("What would you like to know about this goat?")
//Then alert the answer.
alert (goat[userRequest])