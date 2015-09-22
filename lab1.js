'use strict';

/* LAB 1: A Trip to Woodland Park Zoo

 Welcome to Lab 1 =)

 Be sure to read all the comments!

 All of the instructions are inline with the assignment below. Look for the
 word TODO in comments.  Each TODO will have a description of what is
 required.

 To run this file, type the following (in the terminal):

    node lab1.js

 and then press enter/return.

 Instructions for turning this lab in are in the assignment description in
 Canvas.

 I'm happy to answer any questions on Slack.

*/

/* ----------------- Helper ------------------------------------------------
 We've implemented a function that will help you sanity-check your code.
*/

function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

/*
 An assertion is something we expect to be true about the state of the
 program at the point where the assertion is made.

 Remember, state is all the variables that we've declared and their current
 values.

 Here are some examples for how to use the assert method:
*/

assert(1 === 1, '1 equals 1 - this assert will pass.');
assert(1 === 2, 'this is an example of a failing assertion. 1 does not equal 2.');

/* ===========================================================================
------------------Assertions (8 points total)---------------------------------
==============================================================================
 TODO: Invoke assert twice (4 points each).
 (In other words, create two assertions like the ones
 above.)
 Use any boolean expressions that you like, but preferably
 zoo-themed.  Make one pass and one fail. In the failure message, describe why
 it failed.
*/
var animal = 'cheetah';

assert('cheetah' === animal, 'Vy\'s animal of choice is in the zoo system.');
assert('tiger' === animal, 'This failed because it was supposed to be cheetah.');

/* ========================================================================
----------------- Meerkats (20 points total)-------------------------------
===========================================================================
 Meerkats make a sort of chirping noise (according to my 30 seconds of
 research).  We're going to translate two sentences into meerkat speech.
*/

var sentence1 = 'More food please.';
var sentence2 = 'Come over here so you can scratch my belly.';
/*
 Your goal is to replace the words in the above sentences with 'chirp' The
 assertions at the end of this section should pass when you're done.
 HINT: the 'split' method on String will be useful.
*/

// TODO: part #1: use a for loop to replace the words in sentence 1 with
// 'chirp' (10 points)

//split the string and put the words into an array
//replace each word with 'chirp'
//rebuild sentence1 words with chirp
//if you get the last chirp, add a period as the last character in the string

var sentence1Split = sentence1.split(' ');
//var newSentence1 = '';
for (var i = 0; i < sentence1Split.length; i++) {
  sentence1Split[i] = 'chirp';
  //console.log(sentence1Split);
}
sentence1Split.join(' ');
sentence1 = sentence1Split + '.'; // added the period at the end

// TODO: part #2: use a while or do-while loop to replace the words in sentence 2
// with 'chirp' (10 points)

var sentence2Split = sentence2.split(' '); //any time there's a sp, you're creating a new item for the array
var counter = 0;

while (counter != sentence2Split.length) {
  sentence2Split[counter] = 'chirp';
  counter++;
  //console.log("total number of chirps in sentence2 is " + counter);
}
sentence2Split.join(' ');
sentence2 = sentence2Split + '.';

// Leave these assertions as-is! If they pass, your code works.
assert(sentence1 === 'chirp chirp chirp.', 'sentence 1 should have 3 chirps');
assert(sentence2 === 'chirp chirp chirp chirp chirp chirp chirp chirp chirp.',
  'sentence 2 should have 9 chirps');

/* ========================================================================
----------------- Favorite Animals (12 points)-----------------------------
===========================================================================
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next.
 Hint: read the Math.random description on MDN.
*/

var favoriteAnimals = ['elephant', 'penguin', 'eagle', 'camel'];
var nextAnimal;

// TODO: 12 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick

// round the number to the nearest whole number Math.round()
// make sure the index of the random number is within what is available in the array
nextAnimal = favoriteAnimals[Math.floor(Math.random() * favoriteAnimals.length)];
//console.log("My 2nd fav animal is a/an " + nextAnimal);

assert(nextAnimal, 'assign something to nextAnimal');

/* ===================================================================
----------------- Hungry Lion (20 points) ----------------------------
======================================================================
 As long as the lion is well-fed, he doesn't take too much heed of the
 humans that pass through. Unfortunately, the new caretaker is a little
 absent minded.

 The lion needs 4 meals per day on average to stay happy. You're going to
 figure out how many days it took before the lion decided to supplement his
 diet with the caretaker.
*/

// number of times the new caretaker fed the lion. one array entry per day
var mealsPerDay = [5, 4, 3, 6, 2, 4, 3, 4, 5, 1];
var tooHungryDay = 0;

/*
 TODO: 20 points
 Cycle through the days in mealsPerDay. At each day, print out the average
 number of meals/day the lion got since the new caretaker started.
 tooHungryDay should receive the number of days before the lion started
 pondering protein supplements (the first day the average dips below 4
 meals)
*/

// use a loop to go through the array
// divide each entry by 4 and print that
// if the # of fed times is less than 4, increment tooHungryDay

for (var j = mealsPerDay.length -1; j > 0; j--) {
  //console.log("mealsPerDay[j]");
  if (mealsPerDay[j] < 4) {
    tooHungryDay++;
    console.log('Total risky caretaker days: ' + tooHungryDay);
  }
  console.log('Average number of meals/day today ' + mealsPerDay[j] / 4);
}

assert(tooHungryDay, 'remember to assign the answer to tooHungryDay');
assert(tooHungryDay < 10, 'the lion is too hungry before the end of the array');

/* ==================================================================
----------------- Code Style (10 points) ----------------------------
=====================================================================
 TODO: 10 points (5 points each for passing jshint and jscs)
 Now, we're going to use two tools: jshint and jscs, to check our code for
 best-practices and style consistency.

 If you haven't already, run this command in the terminal (inside of this
 directory): npm install

 Now, type
  grunt
   and it will run both jshint and jscs on your code.

 Error and warning descriptions will be printed in the terminal.
 To get full points, correct all of the errors/warnings.
*/
