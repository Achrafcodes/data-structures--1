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
console.log(question.get(false))
console.log(question.get(true))
console.log(question.get("question"))
for (const [key, value] of question) {
    if (typeof key === "number") console.log(`${key} the answer is : ${value}`)
}
// let answer = Number(prompt("your answer?"))
let answer = 3
console.log(answer)

console.log(question.get(question.get("correct") === answer))
let arr = [...question]
console.log(arr)

console.log([...question.values()])
console.log([...question.keys()])
var ea, fa, ia, ja, na, pa, ya;
_.ca = function(a) { return function() { return _.ba[a].apply(this, arguments) } };
_.ba = [];
ea = function(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } };
fa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        retu
        StackExchange.ready(function() {

            var ga3Settings = {
                autoLink: ["stackoverflow.blog", "info.stackoverflowsolutions.com", "stackoverflowsolutions.com"],
                sendTitles: true,
                tracker: window.ga,
                trackingCodes: [
                    'UA-108242619-1'
                ],
                checkDimension: 'dimension42'
            };

            var customGA4Dimensions = {};


            var ga4Settings = {
                tracker: gtag,
                trackingCodes: [
                    'G-WCZ03SZFCQ'
                ],
                consentsToPerformanceCookies: "denied",
                consentsToTargetingCookies: "denied",
                eventParameters: customGA4Dimensions,
                checkForAdBlock: true
            };

            StackExchange.ga.init({ GA3: ga3Settings, GA4: ga4Settings });


            StackExchange.ga.setDimension('dimension2', '|visual-studio-code|word-wrap|');


            StackExchange.ga.setDimension('dimension3', 'Questions/Show');


            StackExchange.ga.setDimension('dimension7', "1664457438.1124147376");

            StackExchange.ga.trackPageView();
        });