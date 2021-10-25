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
        note: ""
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
                taskName: input.taskName,
                endTime: input.taskEndTime,
                note:input.note
            }
        ]);

        setInput({
            taskName: "",
            taskEndTime: "",
            note: ""
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
          
            <textarea
                onChange={handleChange}
                className="AddToList-input"
                name="note"
                value={input.note}
                placeholder="Note"
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