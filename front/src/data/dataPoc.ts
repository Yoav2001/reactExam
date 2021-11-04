import { IStateTasks } from "../components/tasksList/Tasks";
import { IState } from "../App";//צריך ליצור isatteUser

import { User } from "../../../backend/models/userModel";

export const dataTask:IStateTasks["taskList"]=[
    {
      taskId:1,
      emailUserOfTask:"yoavElkana@gmail.com",
      taskName: "do h.w",
      endTime: "1.1.12",
      isComplete: true,
      isRelevent:true,
      isEdit:false
    },
    { 
      taskId:2,
      emailUserOfTask:"nuniElkna@gmail.com",
      taskName: "wash car",
      endTime: "1.1.12",
      isComplete: true,
      isRelevent:true,
      isEdit:false
    }

  ]



  export const dataUserList:IState["userList"]=[
    {
        email:"yoavElkana@gmail.com",
        password: "123",
        fullName: "yoav elkana",
        isAdmin:false
    
    },
    { 
        email:"nuniElkna@gmail.com",
        password: "31231231",
        fullName: "nuni elkana",
        isAdmin:false
    }

  ]


  export const isUserExists=(emailCheck:string,passCheck:string)=>{
    dataUserList.forEach(user => {
      
      if(user.email===emailCheck&&user.password===passCheck)
      return true
    });

    return false
  }

  export default {isUserExists}