import React, { useState, useRef, useEffect } from 'react';
import './Resume.css'


const Resume = (props) => {
    const resumeContainer = useRef(null);   

    const handleClick = () => {
        console.log(resumeContainer);
        resumeContainer.current.classList.toggle("hidden");
      
    }

    return (

        <div class="section-dark resume" id="resume">
            <div class="container">
                <div
                    class="columns is-multiline"
                    data-aos="fade-in"
                    data-aos-easing="linear"
                >
                    <div class="column is-12 about-me">
                        <h1 class="title has-text-centered section-title">
                            View My Resume
                        </h1>
                    </div>
                    <div class="column is-10 has-text-centered is-offset-1  resume-container">
                        <div class="resume-button-container">
                            <a href="JustinLuu.pdf" download="JustinLuu.pdf">
                                    <button class="button" >
                                        Download Resume&emsp;<i class="fad fa-download fa-lg"></i>
                                    </button>
                            </a>
                            <button class="button" onClick={handleClick}>
                                Show/Hide Resume
                            </button>
                        </div>
                            
                        <div class="resume-display-div hidden" ref={resumeContainer}>
                            <iframe class="resume-frame" src="https://drive.google.com/file/d/1kQFAZenAh5k1UnQjF_T7VG1tOJV6pDjZ/preview"  allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Resume;