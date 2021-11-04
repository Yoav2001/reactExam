import 'bootstrap/dist/css/bootstrap.css';
import '../../css/navBar.css'
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
  }



    return (
        <> 
<ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item">
    <button  id="homeBtn" className="nav-link active" onClick={()=>navPages("homeBtn")}  data-toggle="tab"  role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li className="nav-item">
    <button id="loginBtn" className="nav-link" onClick={()=>navPages("loginBtn")}  data-toggle="tab" role="tab" aria-controls="login" aria-selected="false">login</button>
  </li>
  <li className="nav-item">
    <button id="signUpBtn" className="nav-link" onClick={()=>navPages("signUpBtn")}  data-toggle="tab"  role="tab" aria-controls="signUp" aria-selected="false">signUp</button>
  </li>
</ul>

</>
    )
}
