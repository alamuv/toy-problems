var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.newNode = function() {
  var node = {};
  node.value = null;
  node.next = null;
  return node;
};

LinkedList.prototype.removeHead = function() {
  if (this.head === null) { return null; }
  var oldHead = this.head;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }
  return oldHead;
}

LinkedList.prototype.addToTail = function(val) {
  var newTail = newNode(val);

  if(!this.head) {
    this.head = newTail;
  } else if(this.tail) {
    this.tail.next = newTail;
  }
  this.tail = newTail;
};

LinkedList.prototype.contains = function(val) {
  var cur = this.head;

  while (cur !== null) {
    if (cur.value === val) { return true; }
    cur = cur.next;
  }
  return false;
};

var list = new LinkedList();
console.log(list.tail);         //yields 'null'
console.log(list.addToTail(4));
console.log(list.addToTail(5));
console.log(list.head.value);   //yields '4';
console.log(list.contains(5));  //yields 'true';
console.log(list.contains(6));  //yields 'false';
console.log(list.removeHead()); //yields '4'
console.log(list.tail.value);   //yields '5';
