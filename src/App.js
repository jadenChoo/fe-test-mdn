import React, {useState} from 'react';
import Todo from './components/Todo'
import FilterButton from './components/FilterButton'
import Form from './components/Form'
// eslint-disable-next-line

React.createElement("header", null,
React.createElement("h1", null, "Mozilla Developer Network")
);

function App(props) {
  console.log(props.headButton)
  
  function addTask(name){
    alert(name);
  }

  const taskList = props.tasks?.map((task) => (
      <Todo 
        name={task.name} 
        completed={task.completed} 
        id={task.id} 
        key={task.id}
      />
    )
  );
  const headButton = props.headButton?.map((button) => (
    <FilterButton 
      name={button.name} 
      id={button.id} 
      key={button.id}
    />
  )
);
  //const subject = props.subject;
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        {headButton}
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {/* <Todo name="Eat" completed={true} id="todo-0"/>
        <Todo name="Sleep" completed={false} id="todo-1"/>
        <Todo name="Repeat" completed={false} id="todo-2"/> */}
        {taskList}
      </ul>
    </div>
  );
}

export default App;
