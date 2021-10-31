import { IState } from "../App";
import { User } from "../../../backend/models/userModel";

export const dataTask:IState["taskList"]=[
    {
      taskId:1,
      taskName: "do h.w",
      endTime: "1.1.12",
      isComplete: true,
      isRelevent:true
    },
    { 
      taskId:2,
      taskName: "wash car",
      endTime: "1.1.12",
      isComplete: true,
      isRelevent:true
    }

  ]



  export const dataUserList:IState["userList"]=[
    {
        email:"yoavelkan2",
        password: "123",
        fullName: "yoav elkana",
        isAdmin:false
    
    },
    { 
        email:"nuniElkna",
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