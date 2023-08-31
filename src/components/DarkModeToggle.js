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
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        } else {
            //delete dark css
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
        }
    })

    //function to pick which color sun emoji to use
    function SunEmoji() {
        //check if it's dark or light mode
        if(isDark===true) {
            return <Sun color="white" size={27} id='sun'/>
        } else {
            return <Sun color="black" size={27} id='sun'/>
        }
    }

    //function to pick which color moon emoji to use
    function MoonEmoji() {
        //check if it's dark or light mode
        if(isDark===true) {
            return <Moon color="white" size={22} id='moon'/>
        } else {
            return <Moon color="black" size={22} id='moon'/>
        }
    }

    return (
        <div className='toggle-container'>
            <SunEmoji />
            <input type="checkbox" id="switch" onChange={()=> handleClick()} />
            <label for="switch">Toggle</label>
            <MoonEmoji/>
        </div>
    )
}

export default DarkModeToggle
