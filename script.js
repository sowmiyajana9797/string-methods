// String Methods

// 1) charAt :

let str = "Chocolate";
let output = str.charAt(6);
console.log(output);

// output:
// a

// 2) charCodeAt:

let first = "Army";

let out = first.charCodeAt(3);
console.log(out);

// output:
// 121

// 3) concat:

let word1 = "string ";
let word2 = "method";

let put = word1.concat(word2);
console.log(put);

// output:
// string method

// 4) endsWith:

let name = "hai sowmi";
 console.log(name.endsWith("sowmi"));

//  output:
//  true

// 5) startsWith:

let nam = "hey sathya";
console.log(nam.startsWith('hey'));

// output:
// true

// 6) fromCharCode:
 let code = [72,111];
 let from = String.fromCharCode(...code);
 console.log(from);

// output:
// Ho

// 7)  includes:

let sen = "old memories";
console.log(sen.includes("memories"))

// output:
// true

// 8) indexOf:

let sentence = "Best Friends";

console.log(sentence.indexOf("Friends"));

// output:
// 5

// 8) repeat:

var num = " No Longer";

console.log(num.repeat(5));

// output
// No Longer No Longer No Longer No Longer No Longer

// 9) replace:

var method = "Add Together";
console.log(method.replace("Add", "Eat"));

// output
// Eat Together

// 10) search:

let no = "Hate You";
let index = no.search("You");
console.log(index);

// output
// 5

// 11) slice:

const definition ="This user is not found";
 let defi = definition.slice(5,9);

 console.log(defi);

// output
// user

// 12) split:

let screen = "Great power";
console.log(screen.split(" "))

// output
// [ 'Great', 'power' ]

// 13) substring:

var sub = "Good Things";
var num = sub.substring(5,8);

console.log(num);

// output
// Thi

// 14) toLocaleLowerCase:

let local = "HoW aRe you?"
let lower = local.toLocaleLowerCase();

console.log(lower);

// output
// how are you?

// 15) toLocaleUpperCase:

let locale = "what is this?";
let upper = locale.toLocaleUpperCase();

console.log(upper);

// output
// WHAT IS THIS?
 

// 16) trim:

let trim = "    yes, i am here!"

let word = trim.trim();
console.log(word);

// output
// yes, i am here!