import React, { useState } from 'react';
import './App.css';
import  AddTask  from './components/AddTask';
import { List } from './components/List';


export interface IState {
  taskList: {
      taskName: string
      endTime: string
      note?: string

  }[]

  
}


function App() {

  const [taskList,setTask] = useState<IState["taskList"]>([
    {
      taskName: "LeBron James",
      endTime: "1.1.12",
      note: "Allegeric to staying on the same team",
    }
   
  ])
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
     <List taskList={taskList}/>
     <AddTask setTask={setTask} taskList={taskList}/>
    </div>
  );
}

export default App;