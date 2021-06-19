//part 3 1a
let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
console.log(language.slice(0,1).toUpperCase() + language.slice(4,5).toUpperCase());


//b) Without using .slice(), use method chaining to accomplish the same thing.
console.log(language[0].toUpperCase() + language[4].toUpperCase());


//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for 'JavaScript' is '${language[0].toUpperCase() + language[4].toUpperCase()}'.`)


//d) Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.replace("v","b").toUpperCase().slice(0,6));