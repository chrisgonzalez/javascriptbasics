/* 
	Here are some basic data types that you will use all the time!
*/

//this is a Variable! We can associate any kind of data with it
	var data;


//Strings *********************************************/

	/* 

	A String is a collection of characters. There are a bunch of operators you can use to access,
	manipulate and write strings. Google search "JavaScript String Operators" for a full list. 
	Manipulating strings is an essential skill for working with the DOM!

	*/

	data = "Alexander Loyal"; 			//basic string double-quoted
	data = 'Alexander Loyal'; 			//string literal- useful if you need to include double quotes in a string
	data = "Alexander " + "Loyal"; 		//you can "add" strings together- the result of this will  be "Alexander Loyal"


//Numbers *********************************************/

	/*

	Self-explanatory, right? There are a bunch of Math operations you can use, like rounding, trigonometry stuff,
	randomizing. Google search "Javascript Math operations" for a full list.

	*/

	data = 420; 						//number
	data = 400 + 20;					//add some stuff together
	data = 210 * 2;						//multiply some stuff!


//Arrays *********************************************/

	/*

	Arrays are an indexed collection of data, you can store anything in here! 

	*/

	data = [1, 2, 3];									//an array of numbers
	data = ["one", "two", "three"];						//an array of strings that say numbers
	data = [ [1, "one"], [2, "two"], [3, "three"]];		//an array of arrays! of numbers and english word strings

	// Access your array data like:

	data[0]; 					//pulls the first item in the array
	data[data.length-1]; 		//pulls the last item in the array
	data[0][0];					//pulls the first item (an array), and the first item of that array (in this case, 1)


//Boolean *********************************************/

	/*

	Booleans are useful, simple data types for storing true and false;

	*/

	data = false;  	//set data equal to false
	data = true;	//or true


// Objects *********************************************/

	/*

	Most variables, plugins, libraries, and JSON feeds store data in Objects. For instance, an Date 
	is a specific type of JavaScript Object. Objects can be thought of similarly to it's physical 
	representation. An object contains all the information needed to describe itself. For instance, 
	if you have a "Lamp" object, this object contains all the information to describe the structure 
	and functioning of a lamp, such as dimensions, color, components (bulbs, switches, lamp shade), etc.

	*/

	// Let's take a look at some different ways to describe a lamp:


	//This is the basic way to define an Object and store it in a Variable so you can access it later
	//NOTE: What we're defining here is an EMPTY object. It has no properties, methods, or anything useful.

	var lamp = {}; 

	//Now let's try adding some Properties to a lamp object
	//Adding properties to an Object can be done in several ways,
	//this way allows you to initialize the Object and set some properties in one step


	lamp = {						//let's re-instantiate our Variable, and add some properties this time!
		height: 12,					//properties "height" and "width" are numbers
		width: 4,
		on: true					//property "on" is a Boolean, which can be 'true' or 'false'
	}

	//Let's trace out our lamp properties in the browser console

	console.log(lamp); //this will trace the whole object
	console.log("Lamp height: " + lamp.height); //this will trace out the string "Lamp height: ", followed by the value of the Property 'height' we declared above
	console.log("Lamp width: " + lamp.width);
	console.log("Is the lamp on? "+ lamp.on);


	//Now let's turn the lamp off!

	lamp.on = false; // easy :)

	//Let's make sure it worked!

	console.log("Is the lamp on? "+ lamp.on);