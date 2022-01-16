import React, { Component } from 'react';
import './Skills.css'

class Skills extends Component {
    render() {
        return (
            <div>
                {/* <!-- Begin Skills Content --> */}
                <div class="section-light skills" id="skills">
                    <div class="container">
                        <div class="columns is-multiline">
                            <div class="column is-12 about-me">
                                <h1 class="title has-text-centered section-title">Skills</h1>
                            </div>
                            
                            <div class="skills-container">
                                <div class="indiv-skill-container">
                                    <div class="skill-icon-container">
                                        <img class="skill-icon" src="../../html.png"/>
                                    </div>
                                    <div class="skill-text">HTML</div>
                                </div>
                                <div class="indiv-skill-container">
                                    <div class="skill-icon">
                                        <img class="skill-icon" src="../../css.png"/>
                                    </div>
                                    <div class="skill-text">CSS</div>
                                </div>
                                <div class="indiv-skill-container">
                                    <div class="skill-icon">
                                        <img class="skill-icon" src="../../nodejs.png"/>
                                    </div>
                                    <div class="skill-text">NodeJS</div>
                                </div>
                                <div class="indiv-skill-container">
                                    <div class="skill-icon">
                                        <img class="skill-icon" src="../../expressjs.png"/>
                                    </div>
                                    <div class="skill-text">ExpressJS</div>
                                </div>
                                <div class="indiv-skill-container">
                                    <div class="skill-icon">
                                        <img class="skill-icon" src="../../git.png"/>
                                    </div>
                                    <div class="skill-text">Git</div>
                                </div>
                                <div class="indiv-skill-container">
                                    <div class="skill-icon">
                                        <img class="skill-icon" src="../../psql.png"/>
                                    </div>
                                    <div class="skill-text">PostgreSQL</div>
                                </div>
                                <div class="indiv-skill-container">
                                    <div class="skill-icon">
                                        <img class="skill-icon" src="../../mongo.png"/>
                                    </div>
                                    <div class="skill-text">MongoDB</div>
                                </div>
                                <div class="indiv-skill-container">
                                    <div class="skill-icon">
                                        <img class="skill-icon" src="../../java.png"/>
                                    </div>
                                    <div class="skill-text">Java</div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* <!-- End Skills Content --> */}
            </div>
        )
    }
}

export default Skills;