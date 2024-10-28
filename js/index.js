window.onload = function(){

let who = ["The dog", "My grandma", "The maiman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = ["before the class", "when i was sleeping", "while i was excercising", "during my launch", "while i was praying"];

let randomWho = [Math.floor(Math.random()* who.length)];
let randomAction = [Math.floor(Math.random()* action.length)];
let randomWhat = [Math.floor(Math.random()* what.length)];
let randomWhen = [Math.floor(Math.random()* when.length)];

document.querySelector("#excuse").innerHTML = who[randomWho] + " " + action[randomAction] + " " + what[randomWhat] + " " + when[randomWhen]
};
