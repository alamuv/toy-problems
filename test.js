var foo = "Hello";
(function() {
  var bar = " World";
  console.log(foo + bar);
})();
console.log(foo + bar); //bar is undefined

var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
console.log(foo.x); //undefined
console.log(foo); //{ n: 2 }
console.log(bar); //{ n: 1, x: { n: 2 } }

var foo = [];
foo.push(1);
foo.push(2);
console.log(foo.length); //2


console.log( window.foo || ( window.foo = "bar" ) ); //bar
