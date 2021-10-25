import React, { useState } from 'react';
import './App.css';
import  AddTask  from './components/AddTask';
import { CompleteTasksList } from './components/completeTasks';
import { List } from './components/List';


export interface IState {
  taskList: {
      taskId:number
      taskName: string
      endTime: string
      isComplete:boolean,
      isRelevent :boolean

  }[]

  
}


function App() {

  const [taskList,setTask] = useState<IState["taskList"]>([
    {
      taskId:1,
      taskName: "LeBron James",
      endTime: "1.1.12",
      isComplete: true,
      isRelevent:true
    }
   
  ])
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
     <List taskList={taskList}/>
     <CompleteTasksList taskList={taskList}/>
     <AddTask setTask={setTask} taskList={taskList}/>

    </div>
  );
}

export default App;