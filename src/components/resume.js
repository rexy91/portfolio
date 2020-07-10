import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
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
      <div>
        <Grid>
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
              <p style = {{fontSize:'17px'}}>React, Redux, JavaScript, Rails, Ruby, Node.JS, Express.JS, Css, Bootstrap, PostgreSQL, MangoDB, Python.</p>
              <hr style={{borderTop: '3px solid '}} />
              <h2>Experience</h2>

              <Experience
              startYear={"05 / 2018"}
              endYear={"Present"}
              jobName="Billboard Real Estate"
              position="Desktop Support"
              descriptionLine1 = "Maintained computer hardware and software on desktops to keep versions current."
              descriptionLine2 = "Monitored the performance of the computer systems and address issues."
              descriptionLine3 = "Tested software performance throughout the desktop network."
              />
              <Experience
                startYear={"02 / 2016"}
                endYear={"01 / 2018"}
                jobName="A.A Mechanical HVAC"
                position="Data Entry"
                descriptionLine1="Researched on HVAC products specs and provide submittals for projects"
                descriptionLine2="Maintained a database by entering new and updated customer and account info."
                descriptionLine3='Reviewed work orders and accurately input data into company database.'
                descriptionLine4='Flagged accounts needing additional services and routed this information to appropriate teams to prevent service delays.'
                />
              <Experience
                startYear={"01 / 2014"}
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
              {/* <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      /> */}
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default withRouter(Resume);
