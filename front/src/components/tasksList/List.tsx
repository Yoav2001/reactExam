
import React from 'react'
import { IState  as Props } from '../../App';
import completeImg  from '../../img/s.png'
import '../../css/listAndComplete.css'

interface IProps {
    setTask: React.Dispatch<React.SetStateAction<Props["taskList"]>>

    taskList: Props["taskList"]
}

export const List: React.FC<IProps> = ({ taskList ,setTask}) => {


    const deleteTask = (taskId: number): void => {
        setTask(
          taskList.filter((task) => {
            return task.taskId !==   taskId;
          })
        );
      };
     

      const changeReleventOfTask = (idTask:number) => {
        const updatedTasks = taskList.map(task => {
          if (task.taskId === idTask) {
            task.isRelevent = !task.isRelevent;
          }
          return task;
        });
        setTask(updatedTasks);
      };
      const completeTask = (idTask:number) => {
        const updatedTasks = taskList.map(task => {
          if (task.taskId === idTask) {
            task.isComplete = true;
          }
          return task;
        });
        setTask(updatedTasks);
      };
    const renderList = (): JSX.Element[] => {
        return taskList.filter(taskObj=>!taskObj.isComplete).map(taskObj => {
            return (
                    <li className="List">
                       <p>{taskObj.taskName} </p> 
                        <p>{taskObj.endTime}</p>
                       
                            <div>
                                
                            <button type="button" className="btn-close"    onClick={() => {deleteTask(taskObj.taskId); }}></button>
                            <button type="button" onClick={() => {changeReleventOfTask(taskObj.taskId); }}> - </button>
                            <button type="button"onClick={() => {completeTask(taskObj.taskId); }}> 
                            <img className="imgComplete" src={completeImg}></img>
                            </button>

                            </div>
                     
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


