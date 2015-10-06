var expect = require('chai').expect;
var Dll    = require('../lib/dll').Dll;
var Node   = require('../lib/dll').Node;

describe('create doubly linked list and make sure it functions', function(){
  it('head should be null, then set to a node', function(){
    var list = new Dll;
    expect(list.head).to.equal(null);
    var newNode = new Node(5);
    list.insert(newNode);
    expect(list.head.value).to.equal(5);
  })

  it('should search and remove a node, null if not there', function(){
    var list = new Dll;
    var values = [2, 4, 1, 5, 6, 9]
    values.forEach(function(element){
      list.insert(new Node(element));
    })
    expect(list.head.value).to.equal(9);
    expect(list.search(1).value).to.equal(1);
    expect(list.remove(5)).to.equal(5);
    expect(list.head.value).to.equal(9);
    expect(list.remove(5)).to.equal(null);
  })

  it('should print out comma-separated list of values', function(){
    var list = new Dll;
    var values = [2, 4, 1, 5, 6];
    values.forEach(function(element){
      list.insert(new Node(element));
    });
    expect(list.toString()).to.equal('6, 5, 1, 4, 2');
  })
})
