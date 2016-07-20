
//////////////////////// ////////////  
//////////////  BONUS CHALLENGE 

// Make a variable called "temperature" that will take a numerical value
var temperature = -1;
// and make another variable called "sweaty" that will have a value of true or false.
var sweaty = true;

// AND == &&
// OR  == ||
// NOT == !a

// Write some code to alert the user based on the conditions indicated.


// If the temperature is greater than 50 AND sweaty don't wear a coat.

if (temperature > 50 && sweaty == true){
	alert("Dont wear a coat")
}
// If the temperature is less than 50 and above 30 wear a coat.
else if (30 < temperature && temperature < 50){alert("wear a coat")}

// If the temperature is less than 30 and above 0 wear a coat and a hat.
else if (0 < temperature && temperature < 30){alert("wear a coat and a hat")}


// if the temperature is less than 0 stay inside
else {alert("Stay inside")}
