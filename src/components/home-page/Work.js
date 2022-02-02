import React from 'react';
import './Work.css';

const Work = (props) => {


    return (
        <div>
            {/* <!-- Begin Work Content --> */}
            <div class="section-dark my-work" id="my-work">
                <div class="container">
                    <div
                        class="columns is-multiline all-work-container"
                        data-aos="fade-in"
                        data-aos-easing="linear"
                    >
                        <div class="column is-12">
                            <h1 class="title has-text-centered section-title work-title-text">My Work</h1>
                        </div>

                        

                        <div class="column is-3 work-container">

                            <figure
                                class="image is-2by1 work-item"
                                style={{ backgroundImage: `url(../../img/work/kitchen-assistant.png)` }}
                            ></figure>
                            <div class="project-button-container">
                                <a href="https://github.com/justinluu8235/kitchen-assistant-frontend" target="_blank">
                                    <div class="project-button">
                                        <p>Github (Frontend)</p>
                                    </div>
                                </a>
                                <a href="https://github.com/justinluu8235/kitchen-assistant-django-api" target="_blank">
                                    <div class="project-button">
                                        <p>Github (Backend)</p>
                                    </div>
                                </a>
                                <a href="https://kitchen-assistantv2-frontend.herokuapp.com/" target="_blank">
                                    <div class="project-button">
                                        <p>Live Site</p>
                                    </div>
                                </a>
                            </div>
                            <h1 class="project-title-text">Kitchen Assistant v2</h1>
                            <p class="project-description-text"><span class="tech-stack-text">Tech Stack: HTML, CSS, NodeJS, ReactJS, Python, Django, PostgreSQL, REST APIs</span><br/>
                            A rebuild of the kitchen assistant app with React frontend and Django backend. Additional features include:
                            <span class="tech-stack-text">Test Account: justin120 (user) SEI102599 (password)</span> 
                            <span class="tech-stack-text">***</span> Cleaner updates in UI due to React<br/>
                            <span class="tech-stack-text">***</span> Automatic unit conversion when generating shopping lists<br/>
                            <span class="tech-stack-text">***</span> Image upload from user stored on Cloudinary<br/>
                            <span class="tech-stack-text">***</span> Incorporation of pending friend requests sent, pending friend request received, and friend list<br/>
    
                             </p>

                        </div>

                        <div class="column is-3 work-container">

                            <figure
                                class="image is-2by1 work-item"
                                style={{ backgroundImage: `url(../../img/work/kitchen-assistant.png)` }}
                            ></figure>
                            <div class="project-button-container">
                                <a href="https://github.com/justinluu8235/kitchen-assistant" target="_blank">
                                    <div class="project-button">
                                        <p>Github</p>
                                    </div>
                                </a>
                                <a href="https://kitchen-assistant-1025.herokuapp.com/" target="_blank">
                                    <div class="project-button">
                                        <p>Live Site</p>
                                    </div>
                                </a>
                            </div>
                            <h1 class="project-title-text">Kitchen Assistant</h1>
                            <p class="project-description-text"><span class="tech-stack-text">Tech Stack: HTML, CSS, JS, ExpressJS, EJS, Sequelize, PostgreSQL, REST APIs</span><br/>
                            A kitchen oriented website that allows you to:<br/>
                            <span class="tech-stack-text">Test Account: justin@justin.com (user) SEI102599 (password)</span> 
                            <span class="tech-stack-text">***</span> CRUD Recipes<br/>
                            <span class="tech-stack-text">***</span> Get Recipes from an API and add to your own<br/>
                            <span class="tech-stack-text">***</span> Get Recipes from friends and add to your own<br/>
                            <span class="tech-stack-text">***</span> Create a menu to plan meals based on your Recipes<br/>
                            <span class="tech-stack-text">***</span> Generate shopping lists based on your menu or Recipes<br/>
                            <span class="tech-stack-text">***</span> Manage your pantry to avoid adding items to the shopping list that you always have
                             </p>

                        </div>

                        <div class="column is-3 work-container">

                            <figure
                                class="image is-2by1 work-item"
                                style={{ backgroundImage: `url(../../img/work/procore.png)` }}
                            ></figure>
                            <div class="project-button-container">
                                <a href="https://github.com/justinluu8235/procore-constraint-log" target="_blank">
                                    <div class="project-button">
                                        <p>Github (Frontend)</p>
                                    </div>
                                </a>
                                <a href="https://github.com/justinluu8235/procore-constraint-log-backend" target="_blank">
                                    <div class="project-button">
                                        <p>Github (Backend)</p>
                                    </div>
                                </a>
                                <a href="https://procore-constraint-log.herokuapp.com/" target="_blank">
                                    <div class="project-button">
                                        <p>Live Site</p>
                                    </div>
                                </a>
                            </div>
                            <h1 class="project-title-text">Procore Constraint Log</h1>
                            <p class="project-description-text"><span class="tech-stack-text">Tech Stack: HTML, CSS, JS, ReactJS, ExpressJS, MongoDB, REST APIs</span><br/>
                            An added function to an existing construction management software used in my previous experience in project management. 
                            Addresses having to manage multiple spreadsheets outside the software we used to track "constraints"(blockers) for reoccuring meetings </p>

                        </div>

                        
                        <div class="column is-3 work-container">

                            <figure
                                class="image is-2by1 work-item"
                                style={{ backgroundImage: `url(../../img/work/viral.png)` }}
                            ></figure>
                            <div class="project-button-container">
                                <a href="https://github.com/justinluu8235/viral-app" target="_blank">
                                    <div class="project-button">
                                        <p>Github</p>
                                    </div>
                                </a>
                                <a href="https://viral-covid.herokuapp.com/" target="_blank">
                                    <div class="project-button">
                                        <p>Live Site</p>
                                    </div>
                                </a>
                            </div>
                            <h1 class="project-title-text">Viral</h1>
                            <p class="project-description-text"><span class="tech-stack-text">Tech Stack: HTML, CSS, NodeJS, ExpressJS, ReactJS, MongoDB, REST APIs</span><br/>
                            A COVID website that allows users to:<br/>
                            <span class="tech-stack-text">***</span> View updated COVID Data from API<br/>
                            <span class="tech-stack-text">***</span> Upload and display Vaccine Photo<br/>
                            <span class="tech-stack-text">***</span> CRUD Vaccination Sites, their wait times, and reviews<br/>

                             </p>

                        </div>

                        <div class="column is-3 work-container">

                            <figure
                                class="image is-2by1 work-item"
                                style={{ backgroundImage: `url(../../img/work/color-pac.gif)` }}
                            ></figure>
                            <div class="project-button-container">
                                <a href="https://github.com/justinluu8235/color-pac-game" target="_blank">
                                    <div class="project-button">
                                        <p>Github</p>
                                    </div>
                                </a>
                                <a href="https://justinluu8235.github.io/color-pac-game/" target="_blank">
                                    <div class="project-button">
                                        <p>Live Site</p>
                                    </div>
                                </a>
                            </div>
                            <h1 class="project-title-text">Color-Pac</h1>
                            <p class="project-description-text"><span class="tech-stack-text">Tech Stack: HTML, CSS, Javascript, Canvas</span><br/>
                            A fun spin on the pacman theme where the player eats ghosts that are the same color as the pacman 
                            to score a point and loses a point when they bump into a ghost of a different color. <span class="tech-stack-text">***</span>Beware of the continuous color and direction changes of the ghost!</p>

                        </div>






                    </div>
                </div>
            </div>
            {/* <!-- End Work Content --> */}
        </div>
    )
}

export default Work;