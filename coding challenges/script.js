"use strict";

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

document.body.append(document.createElement("textarea"))
document.body.append(document.createElement("button"));
document.querySelector('button').addEventListener("click", function() {
    const key = document.querySelector("textarea").value;
    let value = key.split("\n");
    console.log(value);
    for (let n of value) {
        let [first, second] = n.toLowerCase().trim().split("_")
        console.log(first, second);
        let uper = first.replace(n[0], n[0].toUpperCase)
        console.log(uper)
    }
})