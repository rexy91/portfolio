import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
// import Resume from './resume';
import aboutpage from './aboutpage'
import Blog from './Blog'


const Main = () => (

  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path = '/blog' component={Blog}/>
    <Route path="/aboutme" component={aboutpage} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    {/* <Route path="/resume" component={Resume} /> */}
  </Switch>
  
  
)

export default Main;
