import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import {withRouter} from 'react-router-dom'

class Resume extends Component {
  render() {
    const openGithub = () => {
        window.open('https://github.com/rexy91')
    }

    const openMedium = () => {
        window.open('https://medium.com/@rxye91')
    }
    return(
      <div id='resume-section'>
        <Grid style={{background:'#FFFAF0'}}>
          <Cell col={4}>
            {/* <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div> */}
            <h2 style={{paddingTop: '1em'}}>Yu Hao Ye</h2>
            <h4 style={{color: 'grey'}}>Full-stack Developer</h4>
            <hr style={{borderTop: '3px solid black', width: '50%'}}/>
            {/* <hr style={{borderTop: '3px solid black', width: '50%'}}/> */}
            <h5>Email</h5>
            <p>rexye6197@gmail.com</p>
            <h5>Phone</h5>
            <p>347-259-6197</p>
            <h5>Git Hub</h5>
            <p onClick = {openGithub} style={{cursor:'pointer'}}> https://github.com/rexy91</p>
            <h5>Medium</h5>
            <p onClick = {openMedium} style={{cursor:'pointer'}}> https://medium.com/@rxye91</p>
            <hr style={{borderTop: '3px solid black', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
              <h2>Skills</h2>
              <p className='skill-sections'>Frontend(Proficient):</p>
              <p style = {{fontSize:'17px'}}>React, Redux, JavaScript, HTML, CSS</p>
              <p className='skill-sections'>Backend(Proficient):</p>
              <p style = {{fontSize:'17px'}}>Ruby on Rails, Ruby, NodeJS, ExpressJS, RESTful API, Postgresql, Mysql, Databases.</p>
              <p className='skill-sections'>Familiar:</p>
              <p style = {{fontSize:'17px'}}>React Native, Python, Django, MangoDB, Nosql, Jest, RSpec, Agile Software Development, AWS.</p>
              <hr style={{borderTop: '3px solid '}} />
              <h2>Experience</h2>

              <Experience
              startYear={"11 / 2019"}
              endYear={"Present"}
              jobName="Self-Employed"
              position="Full-Stack Developer"
              descriptionLine1 = "Plan and engineer RESTful web services to manipulate dynamic datasets."
              descriptionLine2 = "Create dynamic and interactive websites that ensure high traffic, page views and User Experience."
              descriptionLine3 = "Develop user interface using React, Redux, HTML5, CSS and perform client-side validations using Ruby on Rails."
              descriptionLine4 = "Follow software development life cycle to design, implement, test, deploy and maintain applications."
              />
              
              <Experience
              startYear={"05 / 2018"}
              endYear={"Present"}
              jobName="Billboard Real Estate"
              position="Desktop Support"
              descriptionLine1 = "Provide support for users consisted of 75% desktop support and 25% server support."
              descriptionLine2 = "Monitor the performance of over 20 computer systems to identify and solve problems for end users."
              descriptionLine3 = "Troubleshoot and resolve system related issues in real-time to minimize operational down time."
              descriptionLine4 = "Solve ~50 weekly tickets by providing timely support for hardware, software and network-related issues."
              />
              <Experience
                startYear={"02 / 2016"}
                endYear={"01 / 2018"}
                jobName="FeiTang Group Inc"
                position="Shipping Manager"
                descriptionLine1="Handled 100-200 orders on a daily basis, including receipt, fulfillment, and shipment for affluent clients."
                descriptionLine2="Maintained a database with more than 1000 accounts using Excel to ensure clients’ information accuracy."
                descriptionLine3='Reviewed work orders and accurately input data into company database.'
                descriptionLine4='Increased company’s website page views by 60% by participating in wireframe and user stories design.'
                />
              <Experience
                startYear={"01 / 2013"}
                endYear={"12 / 2015"}
                jobName="101 Phone Store"
                position="Retail Sales Consultant"
                descriptionLine1="Developed and attained customer experience and sales objectives for store."
                descriptionLine2="Maintained strong knowledge of all products, accessories, pricing plans and service features."
                descriptionLine3="Provided efficient, courteous customer service and assist in all aspects of product offerings and services."
                />
              <hr style={{borderTop: '3px solid '}} />
              <h2>Education</h2>
            <Education
              startYear={"11 / 2018"}
              endYear={"03 / 2018"}
              schoolName="Flatiron School"
              degree="Full Stack Web Development,Ruby on Rails,JavaScript and React program"
               />
               <Education
                 endYear={"05 / 2019"}
                 schoolName="CUNY Brooklyn College"
                 degree="Bachelor of Science in Computer Science"
                  />
                <hr style={{borderTop: '3px solid '}} />
          </Cell>
        </Grid>
        </div>
    )
  }
}

export default withRouter(Resume);
