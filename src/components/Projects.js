import React from 'react'
import '../css/project.css'

function Projects() {
    return (
        <div className='projects-container'>
            <div className='row'>
                <div className='projects-filter'>
                    all
                </div>
                <div className='column'>
                    
                    <div className='project-div minesweeper'>
                        <div className='overlay'>
                            <h2 className='project-name'>Minesweeper</h2>
                            <p className='project-description'>recreation of the classic minesweeper</p>
                            <div className='tag-row'>
                                <div className='tag'>Javascript</div>
                                <div className='tag'>CSS</div>
                            </div>

                        </div>
                        

                    </div>
                </div>

                <div className='column'>
                    <div className='project-div green-column'>
                        here's some text

                    </div>

                </div>

            </div>
        </div>
        
    )
}

export default Projects
