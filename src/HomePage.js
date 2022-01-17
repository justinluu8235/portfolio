import React, { Component } from 'react'
import AboutMe from './components/home-page/AboutMe';
import './Showcase.css'
import Skills from './components/home-page/Skills';
import Resume from './components/Resume';
import Contact from './components/home-page/Contact';
import Work from './components/home-page/Work';
import Hero from './components/home-page/Hero';
class HomePage extends Component {

    componentDidMount() {


        // Get all "navbar-burger" elements
        var $navbarBurgers = Array.prototype.slice.call(
            document.querySelectorAll(".navbar-burger"),
            0
        );
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
            // Add a click event on each of them
            $navbarBurgers.forEach(function ($el) {
                $el.addEventListener("click", function () {
                    // Get the target from the "data-target" attribute
                    var target = $el.dataset.target;
                    var $target = document.getElementById(target);
                    // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                    $el.classList.toggle("is-active");
                    $target.classList.toggle("is-active");
                });
            });
        }




    }

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
                                        <a class="navbar-item" href="#resume">
                                            Resume
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
                        {/* <!-- End Mobile Nav --> */}
                        <Hero />
                        {/* <!-- Begin Hero Menu --> */}
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
                                                <a href="#skills">Skills</a>
                                            </li>
                                            <li>
                                                <a href="#my-work">My Work</a>
                                            </li>
                                            <li>
                                                <a href="#resume">Resume</a>
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
                    <Skills />
                    <Work />
                    <Resume />
                    <Contact />
                </div>




            </div >
        )
    }
}

export default HomePage;
