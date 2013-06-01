//METHODS AKA FUNCTIONS

/*

Functions are a way to write re-usable chunks of code that perform some sort of process. 
If you find yourself writing a very similar code block multiple times, you've probably 
found a good opportunity to create a function. When we talk about functions, we can 
interchangeably use the word "Method" which refers to the purpose of a function, or 
"Function" which refers to the code as-written.

*/

//The basic syntax for writing a function:

function functionName(argument) {
	//operate on the value passed in
	argument = argument * 4;

	//return some new value
	return argument;
}

// or

var someFunction = function(argument) {
	argument = argument * 4;
	return argument;
}

//Both can be called similarly:

functionName();
someFunction();

/*

Anatomy of a Function

1. The "function" keyword is required and works similar to "var", so that 
   Javascript knows you are declaring a function.

2. "functionName" can be any string, including numbers, but must start with 
    a letter. Name this appropriate to it's purpose.

3. (argument) is the way we pass information into a function to operate on. 
    We can skip this and just do functionName(), which accepts no values

4. "return" means that the function will output whatever follows. This is optional.

*/

//Here's a more practical example

function subtract(value1, value2) { //here our function will accept 2 values, value1 and value2 that we will use internally to do some math

	var difference = value1 - value2;

	return difference;

}

//Then when we want to USE this function:

console.log( subtract(4,3) ); //this should output "1"


/*

Now let's create functions to turn our lamp on and off, and call them "turnLampOn" and "turnLampOff".
This very simple example gets at the heart of what jQuery does. Each jQuery plugin works as a special
kind of Object, whether a parallax scroll plugin, an image Carousel, whatever. They all have properties,
and methods that help perform the desired result. In this way, lamp is a very simple example of a 
rich JavaScript Object.

*/

var lamp = {						//let's instantiate our Variable, and add some properties!
		height: 12,					//properties "height" and "width" are numbers
		width: 4,
		color: "#0000FF",			//color property is a hex code, written as a String
		on: true,					//property "on" is a Boolean, which can be 'true' or 'false', we will use this internally to keep track of the lamp's state
		turnLampOn: function(){		//we don't need to pass any data to this function, it serves only a single purpose
			this.on = true;			//NOTE: the "this" keyword refers to the object that we're inside, lamp
		},
		turnLampOff: function(){
			this.on = false;
		}
	}

//Now let's use them!

console.log("Our lamp starts out it's life with on = "+lamp.on);

lamp.turnLampOff();

console.log("And now the lamp is on = "+lamp.on+" aka OFF");

lamp.turnLampOn();

console.log("We just turned the lamp on = "+lamp.on);
