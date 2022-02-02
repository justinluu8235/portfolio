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
                                        <img class="skill-icon" src="../../img/skill/html.png"/>
                                    </div>
                                    <div class="skill-text">HTML</div>
                                </div>
                                <div class="indiv-skill-container">
                                    <div class="skill-icon">
                                        <img class="skill-icon" src="../../img/skill/css.png"/>
                                    </div>
                                    <div class="skill-text">CSS</div>
                                </div>
                                <div class="indiv-skill-container">
                                    <div class="skill-icon">
                                        <img class="skill-icon" src="../../img/skill/nodejs.png"/>
                                    </div>
                                    <div class="skill-text">NodeJS</div>
                                </div>
                                
                                <div class="indiv-skill-container">
                                    <div class="skill-icon">
                                        <img class="skill-icon" src="../../img/skill/psql.png"/>
                                    </div>
                                    <div class="skill-text">PostgreSQL</div>
                                </div>
                                <div class="indiv-skill-container">
                                    <div class="skill-icon">
                                        <img class="skill-icon" src="../../img/skill/mongo.png"/>
                                    </div>
                                    <div class="skill-text">MongoDB</div>
                                </div>
                                <div class="indiv-skill-container">
                                    <div class="skill-icon">
                                        <img class="skill-icon" src="../../img/skill/java.png"/>
                                    </div>
                                    <div class="skill-text">Java</div>
                                </div>

                                <div class="indiv-skill-container">
                                    <div class="skill-icon">
                                        <img class="skill-icon" src="../../img/skill/python.jpeg"/>
                                    </div>
                                    <div class="skill-text">Python</div>
                                </div>
                                <div class="indiv-skill-container">
                                    <div class="skill-icon">
                                        <img class="skill-icon" src="../../img/skill/django.png"/>
                                    </div>
                                    <div class="skill-text">Django</div>
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