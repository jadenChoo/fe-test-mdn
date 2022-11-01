import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA=[
  {id: "todo-0", name:"Eat", completed:true},
  {id: "todo-1", name:"Sleep", completed:false},
  {id: "todo-2", name:"Repeat", completed:false},
]

const headButton=[
  {id: "headButton-0", name:"All"},
  {id: "headButton-1", name:"Active"},
  {id: "headButton-2", name:"Completed"},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App headButton={headButton} tasks={DATA}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
