import React, { Component } from 'react'
import AboutMe from './components/home-page/AboutMe';
import './Showcase.css'
import Skills from './components/home-page/Skills';
import Resume from './components/Resume';

class HomePage extends Component {


    render() {
        return (
            <div>
                {/* <!-- Begin Preloader --> */}
                {/* <div class="preloader-wrapper">
                    <div class="preloader">
                        <img src="img/preloader.gif" alt="" />
                    </div>
                </div> */}
                {/* <!-- End Preloader-->
                <!-- Begin Scroll Up Button --> */}

                <form action="#home">
                    <button id="toTop" title="Go to top">
                        <i class="fas fa-angle-up"></i>
                    </button>
                </form>
                {/* <!-- End Scroll Up Button --> */}

                {/* <!-- Begin Header --> */}
                <div class="header-wrapper" id="home">
                    {/* <!-- Begin Hero --> */}
                    <section class="hero is-large">
                        {/* <!-- Begin Mobile Nav --> */}
                        <nav class="navbar is-transparent is-hidden-desktop">
                            {/* <!-- Begin Burger Menu --> */}
                            <div class="navbar-brand">
                                <div class="navbar-burger burger" data-target="mobile-nav">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            {/* <!-- End Burger Menu --> */}
                            <div id="mobile-nav" class="navbar-menu">
                                <div class="navbar-end">
                                    <div class="navbar-item">
                                        <a class="navbar-item" href="#home">
                                            Home
                                        </a>
                                    </div>
                                    <div class="navbar-item">
                                        <a class="navbar-item" href="#about-me">
                                            About Me
                                        </a>
                                    </div>
                                    <div class="navbar-item">
                                        <a class="navbar-item" href="#services">
                                            Services
                                        </a>
                                    </div>
                                    <div class="navbar-item">
                                        <a class="navbar-item" href="#skills">
                                            Skills
                                        </a>
                                    </div>
                                    <div class="navbar-item">
                                        <a class="navbar-item" href="#my-work">
                                            My Work
                                        </a>
                                    </div>
                                    <div class="navbar-item">
                                        <a class="navbar-item" href="#contact">
                                            Contact
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        {/* <!-- End Mobile Nav -->
                        <!-- Begin Hero Content--> */}
                        <div class="hero-body">
                            <div class="container has-text-centered">
                                {/* <h1 class="subtitle">Hey there, I'm</h1> */}
                                <h2 class="title">Justin Luu</h2>
                                <h1 class="subtitle profession">Full Stack Developer</h1>
                            </div>
                        </div>
                        {/* <!-- End Hero Content-->
                        <!-- Begin Hero Menu --> */}
                        <div class="hero-foot ">
                            <div class="hero-foot--wrapper">
                                <div class="columns">
                                    <div class="column is-12 hero-menu-desktop has-text-centered">
                                        <ul>
                                            <li class="is-active">
                                                <a href="#home">Home</a>
                                            </li>
                                            <li>
                                                <a href="#about-me">About Me</a>
                                            </li>
                                            <li>
                                                <a href="#services">Services</a>
                                            </li>
                                            <li>
                                                <a href="#skills">Skills</a>
                                            </li>
                                            <li>
                                                <a href="#my-work">My Work</a>
                                            </li>
                                            <li>
                                                <a href="#contact">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Hero Menu --> */}
                    </section>
                    {/* <!-- End Hero --> */}
                </div>
                {/* <!-- End Header --> */}

                <div class="main-content">

                    <AboutMe />
                    <div class="section-dark resume">
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
                                <div class="column is-10 has-text-centered is-offset-1">
                                    <h2 class="subtitle">
                                    </h2>
                                    <form action="example.docs">
                                        <a href="../../JustinLuu.pdf" download="JustinLuu">
                                        <button class="button">
                                            Download Resume&emsp;<i class="fad fa-download fa-lg"></i>
                                        </button>
                                        </a>
                        
                                    </form>
                                    <Resume/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <Skills/>
                    {/* <!-- Begin Work Content --> */}
                    <div class="section-dark my-work" id="my-work">
                        <div class="container">
                            <div
                                class="columns is-multiline"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <div class="column is-12">
                                    <h1 class="title has-text-centered section-title">My Work</h1>
                                </div>
                                <div class="column is-3">
                                    <a href="#">
                                        <figure
                                            class="image is-2by1 work-item"
                                        // style="background-image: url('https://picsum.photos/320/180?image=0');"
                                        ></figure>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a href="#">
                                        <figure
                                            class="image is-2by1 work-item"
                                        // style="background-image: url('https://picsum.photos/320/180?image=10');"
                                        ></figure>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a href="#">
                                        <figure
                                            class="image is-2by1 work-item"
                                        // style={{background-image: url('https://picsum.photos/320/180?image=20');}}
                                        ></figure>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a href="#">
                                        <figure
                                            class="image is-2by1 work-item"
                                        // style="background-image: url('https://picsum.photos/320/180?image=30');"
                                        ></figure>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a href="#">
                                        <figure
                                            class="image is-2by1 work-item"
                                        // style="background-image: url('https://picsum.photos/320/180?image=40');"
                                        ></figure>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a href="#">
                                        <figure
                                            class="image is-2by1 work-item"
                                        // style="background-image: url('https://picsum.photos/320/180?image=50');"
                                        ></figure>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a href="#">
                                        <figure
                                            class="image is-2by1 work-item"
                                        // style="background-image: url('https://picsum.photos/320/180?image=60');"
                                        ></figure>
                                    </a>
                                </div>
                                <div class="column is-3">
                                    <a href="#">
                                        <figure
                                            class="image is-2by1 work-item"
                                        // style="background-image: url('https://picsum.photos/320/180?image=70');"
                                        ></figure>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Work Content -->
                    <!-- Begin Contact Content --> */}
                    <div class="section-light contact" id="contact">
                        <div class="container">
                            <div
                                class="columns is-multiline"
                                data-aos="fade-in-up"
                                data-aos-easing="linear"
                            >
                                <div class="column is-12 about-me">
                                    <h1 class="title has-text-centered section-title">
                                        Get in touch
                                    </h1>
                                </div>
                                <div class="column is-8 is-offset-2">
                                    <form
                                        action="https://formspree.io/email@example.com"
                                        method="POST"
                                    >
                                        <div class="field">
                                            <label class="label">Name</label>
                                            <div class="control has-icons-left">
                                                <input
                                                    class="input"
                                                    type="text"
                                                    placeholder="Ex. Jane Smith"
                                                    name="Name"
                                                />
                                                <span class="icon is-small is-left">
                                                    <i class="fas fa-user"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Email</label>
                                            <div class="control has-icons-left">
                                                <input
                                                    class="input"
                                                    type="email"
                                                    placeholder="Ex. hello@arctheme.com"
                                                    name="Email"
                                                />
                                                <span class="icon is-small is-left">
                                                    <i class="fas fa-envelope"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Message</label>
                                            <div class="control">
                                                <textarea
                                                    class="textarea"
                                                    placeholder="Textarea"
                                                    name="Message"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="control ">
                                                <button class="button submit-button">
                                                    Submit&nbsp;&nbsp;
                                                    <i class="fas fa-paper-plane"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Contact Content --> */}
                </div>
                {/* <!-- Begin Footer --> */}
                <div class="footer">
                    <p>
                        <strong class="white">Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>.
                        The source code is licensed
                        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
                        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                    </p>
                </div>
                {/* <!-- End Footer --> */}




            </div >
        )
    }
}

export default HomePage;
