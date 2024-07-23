import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
    <div>
        <h1>About US</h1>
        <h2>welcome to swiggy</h2>
        <User/>
        {/* <UserClass name={"shubhamn from CBC"} location={"himachal pradesh"}/> */}
         {/* here i will show the inforamtion about the team members using class based component in react */}
    </div>
  )
}
export default About