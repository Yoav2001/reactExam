import 'bootstrap/dist/css/bootstrap.css';
import '../../css/login.css'

import React, { useState } from 'react'
import { IState as Props } from '../../App'
import { SignUp } from './SignUp';
import { Login } from './LogIn';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router-dom'
import { NavBar } from './NavBar';
const classPage=["",""]
export const HomePage:React.FC<any> =()=>{
    const historyPages =useHistory();

  const navPages=(numPage:number)=>{
    if(numPage===1)
      historyPages.push("/login")

      historyPages.push("/login")

  }

    return (
        <> 
        <NavBar />

        
        <h1>HOME PAGE To-do App</h1>
        {/* <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <button type="button" className="btn btn-primary" onClick={()=>{
        historyPages.push("/login")

        }}>login</button>
        <button type="button" className="btn btn-primary" onClick={()=>{
        historyPages.push("/signUp")
        }}>SignUp</button> */}

</>


    )

}