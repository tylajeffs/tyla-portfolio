import React, { useEffect, useState } from 'react'
import { Sun } from "react-bootstrap-icons";
import { Moon } from "react-bootstrap-icons";
import '../css/toggle.css'


function DarkModeToggle() {

    //check local storage for dark vs light mode user preference
    //if no preference, set light mode
    const [isDark,setIsDark] = useState(localStorage.getItem("theme") === "dark" ? true : false);;

    //function to handle toggle click
    const handleClick=()=> {
        //switch theme to the opposite
        setIsDark(!isDark)
    }

    //check to see what state the theme is and apply changes to HTML
    useEffect(()=>{
        if(isDark===true){
            //add dark css
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            //delete dark css
            document.body.classList.remove("dark");
            document.body.classList.add("light");
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

export default DarkModeToggle
