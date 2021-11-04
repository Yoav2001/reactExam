import React, { useState } from 'react';
import  AddTask  from './components/tasksList/AddTask';
import { CompleteTasksList } from './components/tasksList/completeTasks';
import { List } from './components/tasksList/List'
import './css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {User} from '../../backend/models/userModel' 
import { dataTask } from './data/dataPoc';
import { dataUserList } from './data/dataPoc';
import { SignUp } from './components/homePages/SignUp';
import { Login } from './components/homePages/LogIn';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from './components/homePages/HomePage';
import { Tasks } from './components/tasksList/Tasks';

export type IState= {
  taskList: {
      taskId:number
      taskName: string
      endTime: string
      isComplete:boolean,
      isRelevent :boolean
  }[]
,  
    userList: User[]
  
}

//cahnge to userList:User[] from models

function App() {


    const [userList,setUsers] = useState<IState["userList"]>(dataUserList)

  return (
<Router>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/tasks" component={Tasks} />
 
     </Switch>

    </Router>        
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