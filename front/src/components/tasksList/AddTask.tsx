import React, { useState } from 'react'
import '../../css/addToList.css'
import { IStateTasks  as Props } from '../../components/tasksList/Tasks';
import '../../css/navBar.css'


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
                emailUserOfTask:"yoavelkana@gmail.com",
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
                className="fadeIn second"
                name="taskName"
                value={input.taskName}
                placeholder="Name of task"
            />
            
            <input 
                type="date"
                onChange={handleChange}
                className="fadeIn second"
                name="taskEndTime"
                value={input.taskEndTime}
                placeholder="Age"
            />
          
          <input type="submit" onClick={handleClick} className="fadeIn second" value=" Add to List"/>

       
        </div>
    )
}

export default AddToList