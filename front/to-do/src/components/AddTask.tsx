import React, { useState } from 'react'
import { IState as Props } from "../App";

interface IProps {
    setTask: React.Dispatch<React.SetStateAction<Props["taskList"]>>
    taskList: Props["taskList"]
}

const AddToList: React.FC<IProps> = ({setTask, taskList}) => {

    const [input, setInput] = useState({
        taskName: "",
        taskEndTime: "",
    }) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(!input.taskEndTime || !input.taskName) return

        setTask([
            ...taskList,
            {      
                taskId:taskList[taskList.length-1].taskId+1,
                taskName: input.taskName,
                endTime: input.taskEndTime,
                isComplete:false,
                isRelevent:true
                
            }
        ]);

        setInput({
            taskName: "",
            taskEndTime: ""
                })
    }

    return (
        <div className="AddToList">
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="taskName"
                value={input.taskName}
                placeholder="Name of task"
            />
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="taskEndTime"
                value={input.taskEndTime}
                placeholder="Age"
            />
          
         
            <button
                onClick={handleClick}
                className="AddToList-btn"
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList