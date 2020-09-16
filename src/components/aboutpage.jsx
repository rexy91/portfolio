import React, { Component } from 'react'
import rails from '../projectPhotos/rails.jpg'
export class aboutpage extends Component {
    render() {
        return (
            <div className = 'ui fluid container'> 
                {/* first grid  */}
                        <div className = 'ui grid'>
                                <div className = 'twelve wide row ' id='firstBox'>
                                    <div className = 'sixteen wide mobile twelve wide computer column' id ='aboutFirstColumn'>
                                        <h3>About Me</h3>
                                        <p>Full-stack developer based in New York City. I have a passion for building full-stack responsive web applications. Experienced in Ruby on Rails, JavaScript, React and Redux based programming and a background in computer science. Pursued a Bachelor of Science degree in Computer Science, and a recent graduate of Flatiron School for the full-stack web development program.</p>
                                    </div>
                                    <div className = 'four wide column '>  
                                    </div>         
                                </div>
                        </div>
                        
                        <div className = 'ui grid'>
                                    <div className = 'four wide column'>
                                        
                                    </div>
                                    <div className = 'sixteen wide mobile twelve wide computer column ' id = 'aboutSecondColumn' >  
                                            <h2>Skills</h2>
                                            <div>
                                            <img src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png" alt=""/>
                                            <img src="https://img.icons8.com/ios-glyphs/64/000000/react.png" alt=""/>
                                            <img src="https://img.icons8.com/ios-filled/50/000000/redux.png" alt=""/>
                                            <img src="https://image.flaticon.com/icons/svg/25/25462.svg" alt=""/>
                                            {/* <img src="https://cdn.icon-icons.com/icons2/512/PNG/512/css3-01_icon-icons.com_50918.png" alt=""/> */}
                                            <img src={rails} alt="raisl icon"/>
                                            <img src="https://img.icons8.com/wired/64/000000/ruby-programming-language.png" alt=""/>
                                            <img src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/Python_logo-512.png" alt=""/>
                                            <img src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png" alt=""/>
                                            </div>

                                            <div id = 'skillDiv1'>
                                                <p>React</p>
                                                <p>Redux</p>
                                                <p>JavaScript</p>
                                                <p>Ruby</p>
                                                <p>Rails</p>
                                                
                                            </div>

                                            <div id ='skillDiv2'>
                                                <p>Css</p>
                                                <p>Bootstrap</p>
                                                <p>MangoDB</p>
                                                <p>Express JS</p>
                                                <p>Git</p>
                                                
                                            </div>

                                    </div>     
                        </div>    

            </div> 

                        
                
            
        )
    }
}

export default aboutpage
