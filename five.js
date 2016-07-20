// Create an object to hold information on your favorite recipe. 
var recipe = {
	recipeTitle: "Pasta Fagioli",
	servings: 24,
	ingredients: ["egg noodles", "canned diced tomatoes", "garlic", "white onion", "celery seed", "cannellini beans"],
}
// It should have properties for recipeTitle (a string), 
// servings (a number), and ingredients (an array of strings).


// Try displaying some information about your recipe using alerts. 
// For example, display the recipe title and recipe servings.
alert("the ingredients for " + recipe.recipeTitle + " are " + recipe.ingredients);
// Bonus: Create a loop to list all the ingredients.
for (var index=0; index<recipe.ingredients.length; index++) {
	console.log(recipe.ingredients[index])}