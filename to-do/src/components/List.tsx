
import React from 'react'
import { IState  as Props } from "../App";

interface IProps {
    taskList: Props["taskList"]
}

export const List: React.FC<IProps> = ({ taskList }) => {

    const renderList = (): JSX.Element[] => {
        return taskList.map(taskObj => {
            return (
                <div>
               <h1>{taskObj.taskName}</h1>
               <h1>{taskObj.endTime}</h1>
               <h1>{taskObj.note}</h1>

             </div>
            )
        })
    }

    return (
        <div>
            {renderList()} 
        </div>
    )
}


