// Copyright 2022 Rory Mackay All rights reserved
// Created by: Rory Mackay
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays what type of admission the user qualifies for based on  age and day of week
 */
function displayMessage () {
  const RATED_R = 18;
	const RATED_PG = 13;
  const RATED_G = 10
	// get user input for age
	let userAge = parseInt(document.getElementById('user-age').value)
  let message;
  	// if user age is equal to or above 18, display "You're old enough to see an R-rated movie by yourself, if you dare!"
	if (userAge >= RATED_R) {
	message = "You're old enough to see an R-rated movie by yourself, if you dare!"
	} 
  // if user age is equal to or above 13, display "You can go to a PG-13 movie all by yourself!"
	else if (userAge >= RATED_PG) {
	message = "You can go to a PG-13 movie all by yourself!"
	} 
  // if user age is equal to or above 10, display "You can go to a PG-13 movie all by yourself!"
	else if (userAge >= RATED_G) {
	message = "You can go to a G rated movie all by yourself!"
	} 
    
	// otherwise display "You are probably too little to see any movie without parental supervision!"	
	else {
	message = "You are probably too little to see any movie without parental supervision!"
	}

// Displaying results
document.getElementById("message").innerHTML = message
}