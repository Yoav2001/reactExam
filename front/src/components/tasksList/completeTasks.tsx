
import React from 'react'
import { IState  as Props } from '../../App';
import '../../css/listAndComplete.css'

interface IProps {
    taskList: Props["taskList"]
}

export const CompleteTasksList: React.FC<IProps> = ({ taskList }) => {

    const renderList = (): JSX.Element[] => {
        return taskList.filter(taskObj=>taskObj.isComplete).map(taskObj => {
            return (
            <li className="List">    
                    <p>{taskObj.taskName}</p>
                    <p>{taskObj.endTime}</p>      

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


