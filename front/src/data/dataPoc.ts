import { IState } from "../App";


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
        password: "31231231",
        fullName: "yoav elkana"
    
    },
    { 
        email:"nuniElkna",
        password: "31231231",
        fullName: "nuni elkana"
    }

  ]