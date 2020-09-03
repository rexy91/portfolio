import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {

    state ={
        clicked: false 
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    
    render() {
        return (
            <nav className='NavBarItems'>
                    <h3 className='navbar-logo'>Yu Hao(Rex) Ye</h3>
                    <div className='menu-icon' onClick = {this.handleClick}>
                        {/* Burger on and off  */}
                        <i className={this.state.clicked? 'fas fa-times' : 'fas fa-bars'}> </i>
                    </div>

                    <ul className={this.state.clicked? 'nav-menu active' : 'nav-menu'}>
                        {/* To close the side bar menu on moble, all you gotta do is just change the state. */}
                        <li><a className='nav-links' href='#' onClick={this.handleClick}>About</a></li>
                        <li><a className='nav-links' href='#' onClick={this.handleClick}>Resume</a></li>
                        <li><a className='nav-links' href='#' onClick={this.handleClick}>Projects</a></li>
                        <li><a className='nav-links' href='#' onClick={this.handleClick}>Blogs</a></li>
                        <li><a className='nav-links' href='#' onClick={this.handleClick}>Contact</a></li>
                    </ul>
            </nav>           
        )
    }
}

export default Navbar;