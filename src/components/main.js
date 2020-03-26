import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import aboutpage from './aboutpage'
import Blog from './Blog'
import newhome from './newhome'
import newLanding from './newLanding'

const Main = () => (

  <Switch>
    {/* <Route exact path="/" component={LandingPage} /> */}
    <Route exact path ='/' component = {newLanding}/>
    <Route exact path = '/blog' component={Blog}/>
    <Route path="/aboutme" component={aboutpage} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
  
  
)

export default Main;
