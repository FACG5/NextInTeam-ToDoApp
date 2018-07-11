var test = require('tape');
var tapSpec = require('tap-spec');
var logic = require('./logic');

test('add function test', function(t) {
  var firstArg =[
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ] ;
  var secondArg = { id :"1" , description :"task1"} ;

  var actual = logic.addTodo(firstArg , secondArg);
  var expected = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
    { id :1 , description :"task1"}
  ];

  t.deepEqual(actual, expected, ' should contain todos with the newTodo added to the end');
  t.end();
});

test('delet function test', function(t) {
  var firstArg =[
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
    { id :1 , description :"task1"}
  ] ;
  var secondArg = 1 ;

  var actual = logic.deleteTodo(firstArg , secondArg);
  var expected = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' }
  ];

  t.deepEqual(actual, expected, 'new array, it should contain todos with the newTodo added to the end.');
  t.end();
});

test('Marked function test', function(t) {
  var firstArg =[
    { id: -3, mark:false ,description: 'first todo' },
    { id: -2,mark:true , description: 'second todo' },
    { id: -1, mark:false ,description: 'third todo' },
    { id :1 ,mark:true , description :"task1"}
  ] ;
  var secondArg = -2 ;

  var actual = logic.markTodo(firstArg , secondArg);
  var expected = [   { id: -3, mark:false ,description: 'first todo' },
    { id: -2,mark:false , description: 'second todo' },
    { id: -1, mark:false ,description: 'third todo' },
    { id :1 ,mark:true , description :"task1"} ];

  t.deepEqual(actual, expected, 'new todo array, all elements will remain unchanged except the one with id: idToMark');
  t.end();
});


test('Marked function test', function(t) {
  var firstArg =[
    { id: -3, mark:false ,description: 'first todo' },
    { id: -2,mark:true , description: 'second todo' },
    { id: -1, mark:false ,description: 'third todo' },
    { id :1 ,mark:true , description :"task1"}
  ] ;
  var secondArg = -1 ;

  var actual = logic.markTodo(firstArg , secondArg);
  var expected = [   { id: -3, mark:false ,description: 'first todo' },
    { id: -2,mark:true, description: 'second todo' },
    { id: -1, mark:true ,description: 'third todo' },
    { id :1 ,mark:true , description :"task1"} ];

  t.deepEqual(actual, expected, 'new todo array, all elements will remain unchanged except the one with id: idToMark');
  t.end();
});
