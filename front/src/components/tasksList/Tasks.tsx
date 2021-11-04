import React, { useState } from 'react';
import  AddTask  from './AddTask';
import { CompleteTasksList } from './completeTasks';
import { List } from './List'
import 'bootstrap/dist/css/bootstrap.min.css';
import { dataTask } from '../../data/dataPoc';
import { dataUserList } from '../../data/dataPoc';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from '../homePages/HomePage';
import {Task} from '../../../../backend/models/taskModel'
export type IStateTasks= {
    taskList: Task[]
    
  }

export const Tasks:React.FC<any> =({numPageActive})=>{
    const [taskList,setTask] = useState<IStateTasks["taskList"]>(dataTask)


    return (
        <div className="App">
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

    )

}