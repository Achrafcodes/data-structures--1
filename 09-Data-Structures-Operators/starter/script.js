"use strict"

// Data needed for a later exercise
const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
}
const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30"

// Data needed for first part of the section
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    openingHours,
}
const question = new Map([
    ["question", "what is the best programming language in the world"],
    [1, "C"],
    [2, "pyton"],
    [3, "javaScript"],
    ["correct", 3],
    [true, "nice good answer"],
    [false, "false answer💠"],
])
let FalseName = 'achRaf';
let toLowerCase = FalseName.toLowerCase();
let trueName = toLowerCase.toUpperCase(0)
console.log(trueName)