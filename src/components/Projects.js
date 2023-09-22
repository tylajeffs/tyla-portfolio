import React from 'react'
import portfolioVideo from '../assets/testVideo.mp4'
import appVideo from '../assets/appvideo.mp4'
import JavaFileSystemImage from '../assets/JavaFileSystem2.png'
import '../css/project.css'


function Projects() {
    return (
        <div className= 'projects-container' id="project-section">
            <div className='row'>
                <div className='projects-filter'></div>

                <div className='column'>

                    <div className='project-div short-project green-column'>
                        
                        <div className='overlay'>
                            <h2 className='project-name'> <a href="https://github.com/tylajeffs/refugee-project" target="_blank" rel="noreferrer noopener">Refugee Data Visualization</a></h2>
                            <p className='project-description'>A project that visualizes 2021 UNHCR refugee data using sankey diagrams</p>
                            <div className='tag-row'>
                                <div className='tag'>Javascript</div>
                                <div className='tag'>CSS</div>
                            </div>
                        </div>
                    </div>

                    <div className='project-div tall-project portfolio'>

                        <video autoPlay loop muted className='background-video'>
                            <source src={portfolioVideo} type='video/mp4'/>
                        </video>

                        <div className='overlay'>
                            <h2 className='project-name'> <a href="https://github.com/tylajeffs/tyla-portfolio" target="_blank" rel="noreferrer noopener">Personal Portfolio</a></h2>
                            <p className='project-description'>That's right, you're looking at it ;)</p>
                            <div className='tag-row'>
                                <div className='tag'>React</div>
                                <div className='tag'>Javascript</div>
                                <div className='tag'>CSS</div>
                                <div className='tag'>Material UI</div>
                            </div>
                        </div>
                    </div>

                    <div className='project-div short-project project-5'>

                        <video autoPlay loop muted className='background-video'>
                            <source src={appVideo} type='video/mp4'/>
                        </video>

                        <div className='overlay'>
                            <h2 className='project-name'> <a href="https://github.com/tylajeffs/i18nSquaresApp" target="_blank" rel="noreferrer noopener">Bouncing Squares</a></h2>
                            <p className='project-description'>An Android game with bouncing squares that must be tapped in the correct order</p>
                            <div className='tag-row'>
                                <div className='tag'>Android Studio</div>
                                <div className='tag'>Java</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='column'>

                    <div className='project-div tall-project minesweeper'>
                        <div className='overlay'>
                            <h2 className='project-name'> <a href="https://github.com/tylajeffs/minesweeper" target="_blank" rel="noreferrer noopener">Minesweeper</a></h2>
                            <p className='project-description'>Recreation of the classic minesweeper with fun themes</p>
                            <div className='tag-row'>
                                <div className='tag'>Javascript</div>
                                <div className='tag'>CSS</div>
                            </div>
                        </div>
                    </div>

                    <div className='project-div tall-project project-4'>

                        <img src={JavaFileSystemImage} className='background-img'/>

                        <div className='overlay'>
                            <h2 className='project-name'> <a href="https://github.com/tylajeffs/javaFileSystemTreeMap" target="_blank" rel="noreferrer noopener">File System Tree Maps</a></h2>
                            <p className='project-description'>A Java project that accesses local computer files and builds a treemap</p>
                            <div className='tag-row'>
                                <div className='tag'>Java</div>
                                <div className='tag'>CSS</div>
                            </div>
                        </div>
                    </div>


                    {/* ADD LINK HERE */}
                    <div className='project-div short-project project-6'>
                        <div className='overlay'>
                            <h2 className='project-name'> <a href="#" target="_blank" rel="noreferrer noopener">Flower Shop eCommerce</a></h2>
                            <p className='project-description'>description</p>
                            <div className='tag-row'>
                                <div className='tag'>Java</div>
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
