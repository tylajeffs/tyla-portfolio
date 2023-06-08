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

                <div className='project-div short-project green-column'>
                        <div className='overlay'>
                            <h2 className='project-name'>Project 2</h2>
                            <p className='project-description'>description</p>
                            <div className='tag-row'>
                                <div className='tag'>Javascript</div>
                                <div className='tag'>CSS</div>
                            </div>

                        </div>
                    </div>

                    <div className='project-div tall-project project-3'>
                        <div className='overlay'>
                            <h2 className='project-name'>Project 3</h2>
                            <p className='project-description'>description</p>
                            <div className='tag-row'>
                                <div className='tag'>Javascript</div>
                                <div className='tag'>CSS</div>
                            </div>
                        </div>
                    </div>

                    <div className='project-div short-project project-5'>
                        <div className='overlay'>
                            <h2 className='project-name'>Project 5</h2>
                            <p className='project-description'>despcription</p>
                            <div className='tag-row'>
                                <div className='tag'>Javascript</div>
                                <div className='tag'>CSS</div>
                            </div>
                        </div>
                    </div>

                    

                </div>

                <div className='column'>

                    <div className='project-div tall-project minesweeper'>
                        <div className='overlay'>
                            <h2 className='project-name'>Minesweeper</h2>
                            <p className='project-description'>recreation of the classic minesweeper</p>
                            <div className='tag-row'>
                                <div className='tag'>Javascript</div>
                                <div className='tag'>CSS</div>
                            </div>
                        </div>
                    </div>

                    <div className='project-div tall-project project-4'>
                        <div className='overlay'>
                            <h2 className='project-name'>Project 4</h2>
                            <p className='project-description'>despcription</p>
                            <div className='tag-row'>
                                <div className='tag'>Javascript</div>
                                <div className='tag'>CSS</div>
                            </div>
                        </div>
                    </div>

                    <div className='project-div short-project project-6'>
                        <div className='overlay'>
                            <h2 className='project-name'>Project 6</h2>
                            <p className='project-description'>despcription</p>
                            <div className='tag-row'>
                                <div className='tag'>Javascript</div>
                                <div className='tag'>CSS</div>
                            </div>
                        </div>
                    </div>

                    

                </div>

            </div>
        </div>
        
    )
}

export default Projects
