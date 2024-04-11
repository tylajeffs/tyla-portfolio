import React from 'react'
import "../css/homepage.css"
import ProjectComponent from '../components/Projects'
import Hero from "../components/Hero"
import AboutComponent from "../components/About"
import Divider from '../components/Divider'

function Home() {
    return (
        <div>

            <AboutComponent />

            <Divider />
            
            <ProjectComponent />



        </div>
    )
}

export default Home

