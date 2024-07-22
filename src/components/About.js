import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
    <div>
        <h1>About US</h1>
        <h2>welcome to swiggy</h2>
        <User name={"shubham from function"}/>
        <UserClass name={"shubhamn from class"}/>
         {/* here i will show the inforamtion about the team members using class based component in react */}
    </div>
  )
}
export default About