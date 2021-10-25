
import React from 'react'
import { IState  as Props } from "../App";

interface IProps {
    taskList: Props["taskList"]
}

export const CompleteTasksList: React.FC<IProps> = ({ taskList }) => {

    const renderList = (): JSX.Element[] => {
        return taskList.filter(taskObj=>taskObj.isComplete).map(taskObj => {
            return (
                <li className="List">  
                    <h4>{taskObj.taskName}</h4>
                    <h6>{taskObj.endTime}</h6>
                </li>
            
            )
        })
    }

    return (
        <div>
            {renderList()} 
        </div>
    )
}


