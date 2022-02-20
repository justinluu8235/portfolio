import React, {Component} from 'react'
import './AboutMe.css'


class AboutMe extends Component {
    render(){
        return(
            <div>
                {/* <!-- Begin About Me Section --> */}
                    <div class="section-light about-me" id="about-me">
                        <div class="container">
                            <div class="column is-12 about-me ">
                                <h1 class="title has-text-centered section-title ">About Me</h1>
                            </div>
                            <div class="about-me-container ">
                                <div class="card blue">
                                    <div class="card-icon-container">
                                        <span class="icon">
                                            <img src={'img/about-me/hammer.gif'}/>
                                        </span>
                                        <h2 class="icon-text"> Builder </h2>
                                    </div>
                                    <p class="card-text">Between my past in building in construction and now building as a software developer, being able to piece together small building blocks to create something impactful never gets old</p>
                                    <div class="effects"></div>
                                    <div class="effects-2"></div>
                                </div>
                                <div class="card red">
                                    <div class="card-icon-container grow-container">
                                        <span class="icon">
                                            <img class="grow-gif" src="img/about-me/grow.gif"/>
                                        </span>
                                        <h2 class="icon-text grow-gif">Always Improving </h2>
                                    </div>
                                    <p class="card-text">Improving is why I work. I'm always seeking out new ways to do things, regardless of whether it is for efficiency, or simply being able to communicate better with others</p>
                                    <div class="effects"></div>
                                    <div class="effects-2"></div>
                                </div>
                                <div class="card green">
                                    <div class="card-icon-container">
                                        <span class="icon">
                                        <img class="grow-gif" src="img/about-me/tea.gif"/>
                                        </span>
                                        <h2 class="icon-text"> Coffee or Tea? </h2>
                                    </div>
                                    <p class="card-text">Tea is for the slow and steady days, but every once and a while need some coffee to crank some work out! When I do go to a coffee shop, it's usually with a request for more espresso shots...</p>
                                    <div class="effects"></div>
                                    <div class="effects-2"></div>
                                </div>
                                {/* <div
                                    class="column is-6 has-vertically-aligned-content"
                                    data-aos="fade-right"
                                >
                                    <p class="is-larger">
                                        &emsp;&emsp;<strong
                                        >Showcase is a modern, beautiful personal website template to
                                            showcase who you are, as well as projects you've worked on in
                                            the past.</strong
                                        >
                                    </p>
                                    <br />
                                    <p>
                                        Showcase was built from the ground up with Bulma to be fast and
                                        responsive out of the box with all source files well documented
                                        for easy to customization. The Showcase template gives you a
                                        personal space to share what you are all about as a creative
                                        designer, developer, photographer, and more!
                                    </p>
                                    <br />
                                    <div class="is-divider"></div>
                                    <div class="columns about-links">
                                        <div class="column">
                                            <p class="heading">
                                                <strong>Give me a ring</strong>
                                            </p>
                                            <p class="subheading">
                                                123-456-7890
                                            </p>
                                        </div>
                                        <div class="column">
                                            <p class="heading">
                                                <strong>Email Me</strong>
                                            </p>
                                            <p class="subheading">
                                                hello@example.com
                                            </p>
                                        </div>
                                        <div class="column">
                                            <p class="heading">
                                                <strong>View my portfolio</strong>
                                            </p>
                                            <p class="subheading">
                                                example.com
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div class="column is-6 right-image " data-aos="fade-left">
                                    <img
                                        class="is-rounded"
                                        src="https://picsum.photos/id/366/600/375"
                                        alt=""
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- End About Me Content --> */}
            </div>
        )
    }
}

export default AboutMe;
