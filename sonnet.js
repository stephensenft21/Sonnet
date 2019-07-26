//Paste the code below into your HTML file.
//Take the contents of the sonnet div and place it in a variable.
let sonnet = document.getElementById('sonnet').innerHTML;
//Find and output the starting position of the word "orphans".
let index = sonnet.indexOf('orphans');
console.log('index of orphans', index);

let length = sonnet.length;
console.log('length of sonnet', length);

sonnet = sonnet.replace('winter', 'yuletide');
console.log('replace winter with yuletide', sonnet);
//Replace all occurances of the string "the" with "a large".
sonnet = sonnet.replace(/the /gi, 'a large ');
console.log('replace the', sonnet);
//Set the content of the sonnet div with the new string.
document.getElementById('sonnet').innerHTML = sonnet;