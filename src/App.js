import React, {useState} from 'react';
import Todo from './components/Todo'
import FilterButton from './components/FilterButton'
import Form from './components/Form'
import {nanoid} from "nanoid"
// eslint-disable-next-line

React.createElement("header", null,
React.createElement("h1", null, "Mozilla Developer Network")
);

const FILTER_MAP = {
  All: () => true,
  Active:(task) => !task.completed,
  Completed:(task) => task.completed
}
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  // console.log(props.headButton)
  const [filter, setFilter] = useState('All');
  const filterList = FILTER_NAMES.map((name)=>
    <FilterButton key={name} name={name} isPressed={name === filter} setFilter={setFilter}
      />
  )
  
  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(tasks)
  }

  function deleteTask(id){
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(
      (task) => {
        if (id === task.id){
          return {...task, name:newName}
        }
        return task;
      }
    )
    setTasks(editedTaskList);
  }

  const taskList = tasks.filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo 
      name={task.name} 
      completed={task.completed} 
      id={task.id} 
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
  
  const tasksNone = taskList.length !== 1 ? 'tasks' : 'task';

  const headingText = `${taskList.length} ${tasksNone} remaining`;
  
  function addTask(name){
    // alert(name);
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }


  // const headButton = props.headButton.map((button) => (
  //     <FilterButton 
  //       name={button.name} 
  //       id={button.id} 
  //       key={button.id}
  //     />
  //   )
  // );
  //const subject = props.subject;
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        {/* {headButton} */}
        {filterList}
      </div>
      <h2 id="list-heading">
        {headingText}
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
