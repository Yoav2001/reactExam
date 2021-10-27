import React, { useState } from 'react';
import  AddTask  from './components/tasksList/AddTask';
import { CompleteTasksList } from './components/tasksList/completeTasks';
import { List } from './components/tasksList/List'
import './css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './components/homePages/LogIn';
import { dataTask } from './data/dataPoc';
import { dataUserList } from './data/dataPoc';
import { SignUp } from './components/homePages/SignUp';

export type IState= {
  taskList: {
      taskId:number
      taskName: string
      endTime: string
      isComplete:boolean,
      isRelevent :boolean
  }[]
,  
    userList: {
    email:string
    password: string
    fullName: string

  }[]
  
}



function App() {

  const [taskList,setTask] = useState<IState["taskList"]>(dataTask)

    const [userList,setUsers] = useState<IState["userList"]>(dataUserList)

  return (
   <SignUp userList={userList} setUsers={setUsers} />

  );
}

export default App;

// <div className="App">
// <h1>People Invited to my Party</h1>
// <div className="listPostion">
//     <div className="listBorder">
//           <List  taskList={taskList} setTask={setTask}/> 
//     </div>

//     <div className="listBorder">
//        <CompleteTasksList taskList={taskList}/>
//     </div>

// </div>

// <AddTask setTask={setTask} taskList={taskList}/>

// </div>