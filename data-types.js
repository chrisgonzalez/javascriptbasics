/* 
	Here are some basic data types that you will use all the time!
*/



// Object Basics

// Most variables, plugins, libraries, and JSON feeds store data in Objects.
// Objects can be thought of by their actual definition. For instance, if you
// have a "Lamp" object, this object contains all the information to describe the
// structure and functioning of a lamp.

// Let's take a look at some different ways to describe a lamp:



//This is the basic way to define an Object and store it in a Variable so you can access it later
//NOTE: What we're defining here is an EMPTY object. It has no properties, methods, or any data to describe the lamp.

var lamp = {} 



//Now let's try adding some Properties to a lamp object
//Adding properties to an Object can be done in several ways,
//this way allows you to initialize the Object and set some properties in one step


var lamp = {					//declare a variable called lamp, so we can reference later and assign an Object to the Variable
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

lamp.on = false; //easy :)

//Let's make sure it works!

console.log("Is the lamp on? "+ lamp.on);