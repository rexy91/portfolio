import React, { Component } from 'react';
import './LandingNavBar.css'
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'

class LandingNavBar extends Component {

    state ={
        clicked: false 
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
        console.log('dfsf')
        this.props.history.push('/') 
    }
    render() {
        return (
            <nav className='NavBarItems'>
                    <h3 className='navbar-logo' onClick={this.handleLogoClick} >Yu Hao(Rex) Ye</h3>
                    <div className='menu-icon' onClick = {this.handleClick}>
                        {/* Burger on and off  */}
                        <i className={this.state.clicked? 'fas fa-times' : 'fas fa-bars'}> </i>
                    </div>

                    <ul className={this.state.clicked? 'nav-menu active' : 'nav-menu'}>
                        {/* To close the side bar menu on moble, all you gotta do is just change the state. */}
                        <li><a className='nav-links' href='' onClick={this.handleNavItemsClick}>About</a></li>
                        <li><a className='nav-links' href='' onClick={this.handleNavItemsClick}>Resume</a></li>
                        <li><a className='nav-links' href='' onClick={this.handleNavItemsClick}>Projects</a></li>
                        <li><a className='nav-links' href='' onClick={this.handleNavItemsClick}>Blogs</a></li>
                        <li><a className='nav-links' href='' onClick={this.handleNavItemsClick}>Contact</a></li>
                    </ul>
            </nav>           
        )
    }
}

export default withRouter(LandingNavBar)