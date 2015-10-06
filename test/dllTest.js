var expect = require('chai').expect;
var Dll    = require('../lib/dll');

describe('create doubly linked list and make sure it functions', function(){
  it('head should be null, then set to a node', function(){
    var list = new Dll;
    expect(list.head).to.equal(null);
    var newNode = new Node(5);
    list.insert(newNode);
    expect(list.head).to.equal(5);
  })

  it('should search and remove a node, null if not there', function(){
    var list = new Dll;
    var values = [2, 4, 1, 5, 6];
    values.forEach(function(){
      if(element == 4){
        testNode = new Node(4);
        list.insert(testNode);
      } else {
        list.insert(new Node(element));
      }
    })

    expect(list.head).to.equal(6);
    expect(list.search(4)).to.equal(testNode);
    expect(list.remove(6)).to.equal(6);
    expect(list.head).to.equal(5);
    expect(list.remove(6)).to.equal(null);
  })

  it('should print out comma-separated list of values', function(){
    var list = new Dll;
    var values = [2, 4, 1, 5, 6];
    values.forEach(function(){
        list.insert(new Node(element));
    })
    expect(list.toString()).to.equal('2, 4, 1, 5, 6');
  })
})
