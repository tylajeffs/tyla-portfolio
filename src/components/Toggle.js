import React, { useEffect, useState } from 'react'
import { Sun } from "react-bootstrap-icons";
import { Moon } from "react-bootstrap-icons";
import '../css/toggle.css'


function Toggle() {

    //check local storage for dark vs light mode user preference
    //if no preference, set light mode
    const [isDark,setIsDark] = useState(localStorage.getItem("theme") === "dark" ? true : false);;

    //function to handle toggle click
    const handleClick=()=> {
        setIsDark(!isDark)
        console.log("you clicked the button!");
    }

    //check to see what state the theme is and apply changes to HTML
    useEffect(()=>{
        if(isDark===true){
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    })


    return (
        <div className='toggle-container'>
            <Sun color="white" size={27} id='sun'/>
            <input type="checkbox" id="switch" onChange={()=> handleClick()} />
            <label for="switch">Toggle</label>
            <Moon color="white" size={22} id='moon'/>
        </div>
    )
}

export default Toggle
