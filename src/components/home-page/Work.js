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
                                <a href="" target="_blank">
                                    <div class="project-button">
                                        <p>Live Site</p>
                                    </div>
                                </a>
                            </div>
                            <h1 class="project-title-text">Procore Constraint Log</h1>
                            <p class="project-description-text">Between my past in building in construction and now building as a software developer, being able to piece together small building blocks to create something impactful never gets </p>

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
                            <p class="project-description-text">Between my past in building in construction and now building as a software developer, being able to piece together small building blocks to create something impactful never gets </p>

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
                            <p class="project-description-text">Between my past in building in construction and now building as a software developer, being able to piece together small building blocks to create something impactful never gets </p>

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
                            <p class="project-description-text">Between my past in building in construction and now building as a software developer, being able to piece together small building blocks to create something impactful never gets </p>

                        </div>






                    </div>
                </div>
            </div>
            {/* <!-- End Work Content --> */}
        </div>
    )
}

export default Work;