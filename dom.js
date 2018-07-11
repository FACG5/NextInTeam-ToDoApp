// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [

  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener

    // add span holding description
    var span = document.createElement('span');
    span.textContent = todo.description;
    if (todo.mark) {
      span.classList.add("mark");
    } else {
      span.classList.remove("mark");
    }
    todoNode.appendChild(span);
    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.textContent = 'delete';
    deleteButtonNode.classList.add("delete-btn");
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });

    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markTodoButtonNode = document.createElement('button');
    markTodoButtonNode.textContent = 'Mark';
    markTodoButtonNode.classList.add('mark-btn');
    markTodoButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });


    todoNode.appendChild(markTodoButtonNode);
    // add editTodo button
    // var editTodoButtonNode= document.createElement('button');
    // editTodoButtonNode.addEventListener('click'function(event){
    //   var newState = todoFunctions.editTodo(state,todo.id);
    //   update(newState);
    // });
    // editTodoButtonNode.textContent='edit'
    // todoNode.appendChild(editTodoButtonNode);
    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      var input = document.getElementById("input");
      event.preventDefault();
      var description = input.value; // event.target ....
      var input = document.getElementsByName('description')[0];
      var description = input.value;
      if(input.value.trim() == ""){
        return;
      }
      input.value="";
      obj = {}
      obj.description=description;
      obj.mark=false;//id added in logic.js
      // obj["id"] = 1;
      // obj["description"] = value
      // ll = {
      //   id: todoFunctions.generateId,
      //   description: value
      // }
       var newState = todoFunctions.addTodo(state, obj);
      //var newState = []; // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');
    todoListNode.id="todo-container-ul";
    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
  /*if(localStorage.getItem('items')) {
    state = JSON.parse(localStorage.getItem('items'));
    update(state);
  }
  else {
    state = [];
  }
  */
})();
