import 'bootstrap/dist/css/bootstrap.css';
import '../../css/login.css'
import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'


export const NavBar:React.FC<any> =({numPageActive})=>{
    const historyPages =useHistory();

  const navPages=(idCheckButton:string)=>{
    switch(idCheckButton) {
    case "homeBtn":
      historyPages.push("/")
      break;
      case "loginBtn":
        historyPages.push("/login")
        break;

        case "signUpBtn":
          historyPages.push("/signUp")
          break;
      default:
        // code block
    }
      document.getElementById("homeBtn")?.classList.remove("active")
      document.getElementById("loginBtn")?.classList.remove("active")
      document.getElementById("signUpBtn")?.classList.remove("active")
     document.getElementById(idCheckButton)?.classList.add("active")



  }



    return (
        <> 
<ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item">
    <button className="nav-link " onClick={()=>navPages("homeBtn")} id="homeBtn" data-toggle="tab"  role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li className="nav-item">
    <button className="nav-link" onClick={()=>navPages("loginBtn")} id="loginBtn" data-toggle="tab" role="tab" aria-controls="login" aria-selected="false">login</button>
  </li>
  <li className="nav-item">
    <button id="signUpBtn" className="nav-link" onClick={()=>navPages("signUpBtn")}  data-toggle="tab"  role="tab" aria-controls="signUp" aria-selected="false">signUp</button>
  </li>
</ul>

</>
    )
}
