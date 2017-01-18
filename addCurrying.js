var addBind = function(x, y) {
  return y ? x+y : function (z) {return x + z;}
};

console.log(addBind(2)(5), addBind(2, 5))

var add = function() {
  var sum = 0;

  for (var i in arguments) {
    sum += arguments[i];
  }

  var ret = add.bind(null, sum);
  ret.valueOf = function() { return sum; }
  return ret;
};

console.log(add(2)(3)(4), add(2,3,4))
