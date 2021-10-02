/*Write a JavaScript program to replace every
character in a given string with the charackter following
in the alphabet*/

const moveCharsForward = (str) => str
.split('')
.map(char => String.fromCharCode(char.charCodeAt(0) +1))
.join('');

console.log(moveCharsForward('z'));