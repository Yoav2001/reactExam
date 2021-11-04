import 'bootstrap/dist/css/bootstrap.css';
import '../../css/login.css'

import React, { useState } from 'react'
import { IState as Props } from '../../App'
import { NavBar } from './NavBar';
import {useHistory} from 'react-router-dom'

interface IProps {
  setUsers: React.Dispatch<React.SetStateAction<Props["userList"]>>
  userList: Props["userList"]
}

export const SignUp : React.FC<IProps> = ({setUsers, userList}) => {



  const [input, setInput] = useState({
    email:"",
    password:"",
    fullName: ""
    
  }) 
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log("sdfdsfdsfdsf");

    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
  }
  
  const handleClick = () => {
    if(!input.email || !input.password|| !input.fullName) return
    console.log(userList);
        
    setUsers([
        ...userList,
        {      
            email:input.email,
            password:input.password,
            fullName:input.fullName,
            isAdmin:false
            
        }
    ]);
  
    setInput({
        email: "",
        password: "",
        fullName:""
            })



  }



    return (
      <>
      <NavBar/>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            {/* <div className="fadeIn first">
              <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
            </div> */}
          <div>
            sign up ToDo
          </div>
        
          <input type="text" onChange={handleChange} name={"email"} value={input.email} className="fadeIn second"  placeholder="email"/>
          <input type="password" onChange={handleChange} name={"password"} value={input.password} className="fadeIn third"  placeholder="password"/>
          <input type="text"onChange={handleChange} name={"fullName"} value={input.fullName}className="fadeIn third" placeholder="full name"/>
          <input type="submit" onClick={handleClick} className="fadeIn fourth" value="Log In"/>

        </div>

      </div>  
      </>
        )


}



