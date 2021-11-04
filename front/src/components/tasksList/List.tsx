
import React,{useState} from 'react'
import { IStateTasks  as Props } from '../../components/tasksList/Tasks';
import completeImg  from '../../img/check.png'
import editImg  from '../../img/editEfron.png'
import {Task} from '../../../../backend/models/taskModel'
import '../../css/listAndComplete.css'
import 'bootstrap/dist/css/bootstrap.css';
// import Datetime from 'react-datetime';

interface IStateTasks {
    setTask: React.Dispatch<React.SetStateAction<Props["taskList"]>>
    taskList: Props["taskList"]
    
}

export const List: React.FC<IStateTasks> = ({ taskList ,setTask}) => {
  const [editValue,setEditValue]=useState<string>("")
  
    const [input, setInput] = useState({
      taskEndTime: "",
  }) 
  const [editMode,setEditMode]=useState<boolean>(false)

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


      const editClick=(task:Task)=>{
        
        setEditMode(!editMode)

        if(editMode){
          
          task.taskName=editValue;
          task.endTime=input.taskEndTime
          
          //change to p
        }
        else{
          setEditValue(
            task.taskName
          )
        }


      }
  
       const handleChange = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditValue(
            
          e.target.value
        )
        
     
     
    }

    const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
  
      setInput({
        ...input,
        [e.target.name]: e.target.value
    })
  }
  
    const renderList = (): JSX.Element[] => {
        return taskList.filter(taskObj=>!taskObj.isComplete).map(taskObj => {
            return (    
                    <li className="List">
                    <div id="paraTasks"  className={editMode? "editDisplayNone":""}>
                       <p>{taskObj.taskName} </p> 
                        <p>{taskObj.endTime}</p>
                     </div>
                      <span className="bi bi-glyphicon glyphicon-pencil">fdsfdsfds</span>
                       <div id="txtAreaTasks" className={editMode? "":"editDisplayNone"}>
                          <textarea id="txtAreaNameTask" name="w3review" onChange={handleChange} >
                          {taskObj.taskName}
                          </textarea>

                          <input type="date" id="taskEndTime"  name="taskEndTime" onChange={handleChangeDate}> 
                          </input>
                        
                        </div>
                        
                      <table>
                        <tr>
                          <td>
                        <button type="button" className="btn-close"    onClick={() => {deleteTask(taskObj.taskId); }}></button>                          
                        </td>
                        <td>
                            <button type="button" onClick={() => {changeReleventOfTask(taskObj.taskId); }}> - </button>
                            </td>
                          </tr>

                          <tr>
                          <td>
                            <img className="imgComplete" src={completeImg} onClick={() => {completeTask(taskObj.taskId); }}></img>
                            </td>
                            <td>
                            <img className="imgComplete" src={editImg} onClick={() => {editClick(taskObj) }}></img>
                             </td>
                            </tr>

                         </table>
                     
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



 
      // const editClick = (idTask:number) => {

      //   const updatedTasks = taskList.map(task => {
      //     if (task.taskId === idTask) {
      //       if(task.isEdit){
      //         task.taskName="1"
      //         task.endTime="2"
      //       }
      //       document.getElementById("paraTasks").


      //       task.isEdit = !task.isEdit;
      //     }
      //   });
      //   // setTask(updatedTasks);
      // };

