import React from 'react'
import "../css/home.css"
import ProjectComponent from '../components/Projects'

function Home() {
    return (
        <div>
            <div className="hero">

                <h1 className="hero-text">Hi! My name is Tyla and I'm a developer...</h1>

            </div>
            <ProjectComponent />


        </div>
    )
}

export default Home

