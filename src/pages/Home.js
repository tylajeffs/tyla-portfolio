import React from 'react'
import "../css/homepage.css"
import ProjectComponent from '../components/Projects'
import Hero from "../components/Hero"
import AboutComponent from "../components/About"

function Home() {
    return (
        <div>
            <Hero />

            <AboutComponent />
            
            <ProjectComponent />



        </div>
    )
}

export default Home

