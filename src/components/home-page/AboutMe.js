import React, {Component} from 'react'


class AboutMe extends Component {
    render(){
        return(
            <div>
                {/* <!-- Begin About Me Section --> */}
                    <div class="section-light about-me" id="about-me">
                        <div class="container">
                            <div class="column is-12 about-me">
                                <h1 class="title has-text-centered section-title">About Me</h1>
                            </div>
                            <div class="columns is-multiline">
                                <div
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
                                </div>
                                <div class="column is-6 right-image " data-aos="fade-left">
                                    <img
                                        class="is-rounded"
                                        src="https://picsum.photos/id/366/600/375"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End About Me Content --> */}
            </div>
        )
    }
}

export default AboutMe;
