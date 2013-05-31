//CONDITIONALS

/*

Conditionals are used to evaluate and compare data. Let's set up some data, and then use conditionals to compare them!

*/

var myAge = 12;
var yourAge = 15;
var myMomsAge = 45;

//IF + ELSE

	/*

	If statements can be used on their own, or with an ELSE statment to apply logic in 2 possible cases

	*/

	if(myAge < yourAge){							//case 1: if the comparison in the parentheses is true

		console.log("I am younger than you")

	}else{											//case 2: if the comparison in the parentheses was not true

		console.log("I am not younger than you")

	}


//IF + ELSE IF

	if(myAge < yourAge && yourAge > myMomsAge){			//this is an example of evaluating two things that MUST be true in order to execute the code

		console.log("I am younger than you AND you are older than my mom");

	}else if(yourAge < myMomsAge || yourAge < myAge){	//this is an example of evaluating two things where EITHER CAN be true in order to execute the code

		console.log("You are younger than my mom OR you are younger than me")

	}else {												//as soon as a condition in the chain is true, all following conditions will not be evaluated

		console.log("This will never get called");

	}

//Examples of some conditions you can use for comparison:

	myAge == 12; 	//double equals means IS THIS EQUAL TO, single equals will SET IT EQUAL TO 12
	myAge <  12;	//my age is less than 12
	myAge <= 12;	//my age is less than or equal to 12
	myAge >  12;	//my age is greater than 12
	myAge >= 12;	//my age is greater than or equal to 12


//LOOPS AND ITERATING

//The FOR Loop

	/* 

	The For Loop is an excellent tool for iterating through anything that has a length. 
	Typically this is an array or a string (iterating through characters in the string).
	Let's set up an array and use a for loop to compare some values.

	*/

	var someStuff = [1, "two", "three", 4, 5, 6, "seven", 8, 9, 10];

	
	//Anatomy of a for loop (read it like a human).
	
	// for(i=0;     				For some variable, let's call it "i" and make it equal to 0
	//     i<someStuff.length;		While "i" is less than the length of our array
	//	   i++						Execute all the code in this loop then increment "i" by 1

	console.log("Printing a for loop of array from start to finish!")

	for(var i=0; i<someStuff.length; i++){

		console.log( someStuff[i] ); //this will print out each item in the array, 1 at a time, as "i" goes from 0 to the last item in the array

	}



	console.log("Printing a for loop of array from finish to start!")

	//this for loop is the opposite! starting at the last item in the array, it moves towards the first item
	for(var i=someStuff.length-1; i>=0; i--){

		console.log( someStuff[i] ); //this will print out each item in the array, 1 at a time, as "i" goes from 0 to the last item in the array

	}



	console.log("Printing a for loop of array data types from start to finish!")

	for(var i=0; i<someStuff.length; i++){

		console.log( typeof someStuff[i] ); //this will print out the data type of each item in the array

	}
