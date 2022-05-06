// Copyright 2022 Rory Mackay All rights reserved
// Created by: Rory Mackay
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays what type of admission the user qualifies for based on  age and day of week
 */
function displayMessage () {
    	// initialize variables
	let message = "Please make a selection above."
  // get user input for age and day of week
	let userAge = parseInt(document.getElementById('user-age').value)
	let select = document.getElementById('days');
	let day = select.options[select.selectedIndex].value;
  	// if user age is over 95 or less than 5, display "No need to pay, it's free for you!""
	if (userAge > 95 || userAge < 5) {
	  message = "No need to pay, it's free for you!"
	} 
  // if user age is 12 to 21 OR it is Tuesday or Thursday, display "You get the student discount!"
	else if ((days == "tuesday") || (days == "thursday")         || (userAge <= 21 && userAge >= 12)) {
	  message = "You get the student discount!"
	} 
	// otherwise display "Regular price for you!"	
	else {
	  message = "Regular price for you!"
	}

// Displaying results
document.getElementById("message").innerHTML = message
}