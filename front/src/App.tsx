import React, { useState } from 'react';
import './App.css';
import  AddTask  from './components/AddTask';
import { CompleteTasksList } from './components/completeTasks';
import { List } from './components/List';
import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

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
    },
    { 
      taskId:2,
      taskName: "LeBron James",
      endTime: "1.1.12",
      isComplete: true,
      isRelevent:true
    }
   
  ])
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <div className="listPostion">
          <div className="listBorder">
                <List  taskList={taskList} setTask={setTask}/> 
          </div>

          <div className="listBorder">
             <CompleteTasksList taskList={taskList}/>
          </div>

      </div>
  
     <AddTask setTask={setTask} taskList={taskList}/>

    </div>
  );
}

export default App;