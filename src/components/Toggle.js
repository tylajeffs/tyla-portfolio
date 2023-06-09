import React from 'react'
import { Sun } from "react-bootstrap-icons";
import { Moon } from "react-bootstrap-icons";
import '../css/toggle.css'


function Toggle() {
    return (
        <div className='toggle-container'>
            <Sun size={27} id='sun'/>
            <input type="checkbox" id="switch" />
            <label for="switch">Toggle</label>
            <Moon size={22} id='moon'/>
        </div>
    )
}

export default Toggle
