import React from 'react'
import '../css/project.css'

function Projects() {
    return (
        <div className='projects-container'>
            <div className='row'>
                <div className='projects-filter'></div>

                <div className='column'>

                    <div className='project-div short-project green-column'>
                        <div className='overlay'>
                            <h2 className='project-name'> <a href="#">Project 2</a></h2>
                            <p className='project-description'>description</p>
                            <div className='tag-row'>
                                <div className='tag'>Javascript</div>
                                <div className='tag'>CSS</div>
                            </div>
                        </div>
                    </div>

                    <div className='project-div tall-project project-3'>
                        <div className='overlay'>
                            <h2 className='project-name'> <a href="#">Project 3</a></h2>
                            <p className='project-description'>description</p>
                            <div className='tag-row'>
                                <div className='tag'>Javascript</div>
                                <div className='tag'>CSS</div>
                            </div>
                        </div>
                    </div>

                    <div className='project-div short-project project-5'>
                        <div className='overlay'>
                            <h2 className='project-name'> <a href="#">Project 5</a></h2>
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
                            <h2 className='project-name'> <a href="#">Minesweeper</a></h2>
                            <p className='project-description'>recreation of the classic minesweeper</p>
                            <div className='tag-row'>
                                <div className='tag'>Javascript</div>
                                <div className='tag'>CSS</div>
                            </div>
                        </div>
                    </div>

                    <div className='project-div tall-project project-4'>
                        <div className='overlay'>
                            <h2 className='project-name'> <a href="#">Project 4</a></h2>
                            <p className='project-description'>despcription</p>
                            <div className='tag-row'>
                                <div className='tag'>Javascript</div>
                                <div className='tag'>CSS</div>
                            </div>
                        </div>
                    </div>

                    <div className='project-div short-project project-6'>
                        <div className='overlay'>
                            <h2 className='project-name'> <a href="#">Project 6</a></h2>
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
