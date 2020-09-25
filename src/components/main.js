import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './contact';
import NewProjects from '../components/ProjectCardRedo/ProjectCardRedo
import aboutpage from './aboutpage'
import Blog from './blogs/Blog'
import LandingRedo from './LandingRedo/LandingRedo'
import Resume from './resume'

const Main = () => (

  <Switch>
    <Route exact path ='/' component = {LandingRedo}/>
    <Route exact path = '/Blogs' component={Blog}/>
    <Route path="/About" component={aboutpage} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Projects" component={NewProjects} />
    <Route path='/Resume' component={Resume} />
  </Switch>
  
  
)

export default Main;
