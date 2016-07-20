//Write a function "nameThatAnimal" that has two arguments: a name and a type of animal
//function  nameThatAnimal (name, animal) {
// The function should alert a sentence naming the animal.
//alert("The " + animal + " is named " + name + ".");
//}
//Call your function a funny name an a real animal.

//nameThatAnimal("Shelby", "zebra");


// Write a function "addTwo" that has two arguments: a and b, both numbers.
//function addTwo (a, b) {

// the function should find the sum of a, b and then add 2.
//alert(a + b * 2);
//}
//call your function with two values for a and b.
//addTwo(5, 3);



//build a variable for fullName
//	var fullName = window.prompt("What is your name?", "full name");


//function that prints the variable
//	function print(thing){
//		document.write(thing);
//	}
// function with the variable
//print(fullName);


//function square(num) {
//	return num * num;
//}

//alert(square(4));

//var squareOfFive = square(5);

//alert(squareOfFive);


//function calculateTip(total) {
 //   var tipPercent = 0.15; //Can be changed
 //   return (total * tipPercent);
//}

//var billPreTip = 10;
//var billTip   = calculateTip(billPreTip);
//var receipt   = 'Meal: ' + billPreTip + ' Tip: ' + billTip + 
//    ' Total: ' + (billPreTip + billTip);
//alert(receipt); 


//var friend = "Bobby";
//var bff = "Randy";

//function nameFriend (){
//	var bff = "Melanie";
//	alert(friend + " is friends with " + bff);
//}

//alert(friend + " is friends with " + bff);

//var cats = 8;
//var dogs = 8;

//if(cats <= dogs) {
//	alert("there are a lot of dogs");
//}

//if(cats === dogs){
//	alert("The world is ending.");
//}

//if(cats >= dogs) {
//	alert("all is right in the world")
//}

//if else statements //variable for temperature
var temperature = 85;

//if it is below 35 degrees, dying.
if(temperature  < 35){
	alert("youre probably dying");
}
//if it is between 35- 50 degrees, put on a jacket.
else if (35 < temperature && temperature< 50){
	alert("brrrr");
}
// if it is 50 - 75, you're ok
else if (50 < temperature && temperature < 75){
	alert("Sittin pretty");
}
//if it is 75 - 100, go to beach
else if (75 < temperature && temperature < 100){
	alert("go to the beach");
}
//if it is above 100, you're probably dying.
else{
	alert("Youre probably dying");
}