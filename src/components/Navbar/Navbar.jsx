import React, { Component } from 'react';
import './Navbar.css'
import {withRouter} from 'react-router-dom'
import {Link, animateScroll as scroll} from 'react-scroll'

class Navbar extends Component {

    state ={
        clicked: false 
    }

    componentDidMount(){
        let div = document.getElementById('navbar')
            let prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                div.style.top = "0";
            } else {
                div.style.top = "-70px";
            }
            prevScrollpos = currentScrollPos;
            }
     }

    handleClick = (e) => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    handleNavItemsClick = (e) => {
        // Toggle side bar on and off. 
        this.setState({
            clicked: !this.state.clicked
        })
        e.preventDefault() // Prevent Anchor Tag from refreshing
        
        this.props.history.push(`/${e.target.innerText}`)
    }
    
    handleLogoClick = (e) => {
        this.setState({
            clicked: false
        })
        this.props.history.push('/') 
    }
    render() {
        return (
            <nav className='NavBarItems' id='navbar'>
                    <Link className='navbar-logo'
                        style={{color:'white'}}
                        activeClass = 'active'
                        to='main'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}>
                            Yu Hao(Rex) Ye
                    </Link>

                    <div className='menu-icon' onClick = {this.handleClick}>
                        {/* Burger on and off  */}
                        <i className={this.state.clicked? 'fas fa-times' : 'fas fa-bars'}> </i>
                    </div>

                    {/* To close the side bar menu on mobile, all you gotta do is just change the state. */}
                    <ul className={this.state.clicked? 'nav-menu active' : 'nav-menu'}>

                    <Link
                        className='nav-links'
                        style={{color:'white'}}
                        activeClass = 'active'
                        to='aboutPage'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}>
                            About
                    </Link>
                    <Link
                        className='nav-links'
                        style={{color:'white'}}
                        activeClass = 'active'
                        to='resume-section'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}>
                            Resume
                    </Link>
                    <Link
                        className='nav-links'
                        style={{color:'white'}}
                        activeClass = 'active'
                        to='project-div'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}>
                            Projects
                    </Link>
                    <Link
                        className='nav-links'
                        style={{color:'white'}}
                        activeClass = 'active'
                        to='blogPage'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}>
                            Blogs
                    </Link>

                    <Link
                        className='nav-links'
                        style={{color:'white'}}
                        activeClass = 'active'
                        to='contactformdiv'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}>
                            Contact
                    </Link>
                    </ul>
            </nav>           
        )
    }
}

export default withRouter(Navbar)