// Part 1. Fill in any missing parts of the todoFunction object!d
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    /*
    aha1 = JSON.parse(localStorage.getItem("items"))
    var idCounter;

    if(typeof aha1[0] != 'undefined'){
      idCounter = aha1[aha1.length-1].id+1;
    }else{
      idCounter = 0;
    }
    */
    idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),
  
  //cloneArrayOfObjects will create a copy of the todos array 
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo){
      return JSON.parse(JSON.stringify(todo));
    });
  },
  
  addTodo: function(todos, newTodo) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
    // var newtodos = [...todo];
   /* if(newTodo == ""){
      return todos
    }*/
    newTodo.id = todoFunctions.generateId();
    var todos = todos.concat(newTodo);
    //todoFunctions.saveTodos(todos);
    return todos;
  },
  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
    var todos = todos.filter(function(element ){
      if(element.id === idToDelete)
        return false;
      else
        return true;
    });
    //todoFunctions.saveTodos(todos);
    return todos;
  },
  markTodo: function(todos, idToMark) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
    var todos = todos.map((x)=>{
      if(x.id==idToMark){
        if(x.mark == false){
          x.mark = true;
          return x;
        }else{
          x.mark = false;
          return x;
        }
      }
      return x;
    })
    //todoFunctions.saveTodos(todos);
    return todos;
  },
  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  },
  saveTodos: function(todos){
    localStorage.setItem('items', JSON.stringify(todos));
  },
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details: 
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
