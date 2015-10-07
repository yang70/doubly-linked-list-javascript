var Dll = function(){
  this.head = null;
};

var Node = function(val){
  this.value = val;
  this.prev = null;
  this.next = null;
};

Dll.prototype.insert = function(node){
  if(this.head == null){
    this.head = node;
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
};

Dll.prototype.search = function(val){
  var current = this.head;
  while(current){
    if(current.value == val){
      return current;
    }
    current = current.next;
  }
};

Dll.prototype.remove = function(val){
  var current = this.head;
  while(current){
    if(current.value == val){
      if(current.next){ current.next.prev = current.prev; }
      if(current.prev){ current.prev.next = current.next; }
      if(current == this.head){ this.head = current.next; }
      return current.value;
    }
    current = current.next;
  }
  return null;
};

Dll.prototype.toString = function(){
  var string = '';
  current = this.head;
  while(current){
    string += current.value;
    if(current.next == null){
      return string;
    } else {
      string += ", ";
      current = current.next;
    }
  }
  return 'Empty';
};

module.exports = {
  Dll: Dll,
  Node: Node
};
