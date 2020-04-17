import React, { Component } from 'react'
import rails from '../projectPhotos/rails.jpg'
export class aboutpage extends Component {
    render() {
        return (
            <div className = 'ui fluid container'> 
                {/* first grid  */}
                        <div className = 'ui grid'>
                                <div className = 'twelve wide row '>
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
                                    <div className="row">
                                            <div className="column">
                                                <h2>Skills</h2>
                                                <div>
                                                    <img src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png"/>
                                                    <img src="https://img.icons8.com/ios-glyphs/64/000000/react.png"/>
                                                    <img src="https://img.icons8.com/ios-filled/50/000000/redux.png"/>
                                                    <img src="https://image.flaticon.com/icons/svg/25/25462.svg" alt=""/>
                                                    <img src={rails} alt="raisl icon"/>
                                                    <img src="https://img.icons8.com/wired/64/000000/ruby-programming-language.png"/>
                                                    <img src="https://cdn.icon-icons.com/icons2/512/PNG/512/css3-01_icon-icons.com_50918.png" alt=""/>
                                                    <img src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/Python_logo-512.png" alt=""/>
                                                    <img src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png" alt=""/>
                                                    
                                                </div>
                                            </div>
                                    </div> 

                                    <div className='container'>
                                        <div className="row">
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
                                                <p>Express.JS</p>
                                                <p>Git</p>
                                            </div>
                                        </div>
                                    </div>


                                            {/* <div class="ui two column divided grid">
                                                <div className = 'stretched row' style = {{border:'solid 1px'}} >
                                                    <div className = 'twelve wide column '>
                                                            <h2>Skills</h2>
                                                    </div>

                                                        <div className = 'eight wide computer sixteen wide mobile column' id = 'skillsContainer' style = {{border:'solid 1px'}}>
                                                            <div className ='ui two column divided grid skillLogos' >
                                                                        <div className = 'eight wide computer eight wide mobile column'>
                                                                        <img src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png"/>
                                                                        <img src="https://img.icons8.com/ios-glyphs/64/000000/react.png"/>
                                                                        <img src="https://img.icons8.com/ios-filled/50/000000/redux.png"/>
                                                                        <img src={rails} alt="raisl icon"/>
                                                                        <img src="https://img.icons8.com/wired/64/000000/ruby-programming-language.png"/>
                                                                        <img src="https://img.icons8.com/wired/64/000000/ruby-programming-language.png"/>
                                                                        </div>
                                                                        <div className = 'eight wide computer eight wide mobile column skillLogos' > 
                                                                            <h4>sdfsdafsdf</h4>
                                                                        </div>
                                                            </div>

                                                        </div>

                                                        <div className = 'eight wide computer sixteen wide mobile column '  id = 'skillsText'style = {{border:'solid 1px'}}>
                                                                        <p>React <br/> Redux <br/> JavaScript <br/> Ruby <br/> Rails <br/> 
                                                                        </p>
                                                                        <p style = {{display:'inline'}}>Css <br/> Html <br/> Git <br/> Python <br/> MangoDB</p>
                                                                        <p>Redux</p>
                                                                        <p>JavaScript</p>
                                                                        <p>Ruby</p>
                                                                        <p>Rails</p>
                                                                        <p>Css</p>
                                                                        <p>Html5</p>
                                                                        <p>Git</p>
                                                        </div>  
                                                </div>
                                            </div>                                             */}
                                    </div>     
                        </div>    
                                {/* end of 1st row  */}
                                {/* <div className = 'row' style = {{border:'solid 1px'}}>
                                        <div className = 'four wide column' style = {{border:'solid 1px'}}>

                                        </div>

                                        <div className = 'twelve wide column' style = {{border:'solid 1px'}}></div>
                                </div>


                        

                        {/* <div className = 'four wide column '>
                            
                        </div>
    
                        <div className = 'twelve wide computer sixteen wide mobile column' id ='aboutSecondColumn' style = {{border:'solid 1px'}}>

                        </div> */}
                            {/* <div className = 'twelve wide row' style = {{border:'solid 1px'}} >
                                    <h3>Skills</h3>
                            </div> */}

                            {/* <div className = 'six wide row' id ='skillArea' > */}
                                        {/* <div className = 'six wide column' style = {{border:'solid 1px',textAlign:'center',backgroundColor:'red'}} >
                                                    <h2>jsdfjsdfjdsjfdsjfdsjfdjsfjdsfjsdj</h2>
                                        </div> */}
                                        {/* <img src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png"/>
                                        <img src="https://img.icons8.com/ios-glyphs/64/000000/react.png"/>
                                        <img src="https://img.icons8.com/ios-filled/50/000000/redux.png"/>
                                        <img src='https://lh3.googleusercontent.com/BqIoMfAu3xBNXPQZJ_huFLKwUSvHHWVzmft4PdW22pkzvU1Wuax6G2Rv-Ux9jgHtCDAJ3nQ=s85'/> */}
                                        
                                        {/* <div className = 'four wide column' style = {{border:'solid 1px', backgroundColor:'red'}}>
                                                    <h1>dsfsf</h1>
                                        </div> */}

                            {/* <img src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png"/>
                            <img src="https://img.icons8.com/ios-glyphs/64/000000/react.png"/>
                            <img src="https://img.icons8.com/ios-filled/50/000000/redux.png"/>
                            <img src="https://img.icons8.com/wired/64/000000/ruby-programming-language.png"/>
                            <p>Full-stack developer based in New York City. I have a passion for building full-stack responsive web applications. Experienced in Ruby on Rails, JavaScript, React and Redux based programming and a background in computer science. Pursued a Bachelor of Science degree in Computer Science, and a recent gradute of Flatiron Bootcamp for the full-stack web development program.</p> */}




            </div> 
                        
                
            
        )
    }
}

export default aboutpage
