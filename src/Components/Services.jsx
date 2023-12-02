import React from 'react';
import "./Services.css";
import Cards from "./Card";


export default function Services() {
  return (
    <div className='services'>
       <h1>OUR <span>SERVICES</span></h1>
      <h6>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</h6>
      <div className='cardss'>
       <Cards head="Robotics and IOT" im={1} para="Welcome to the exciting world of Robotics and the Internet of Things (IoT)! This comprehensive course is designed to provide you with a solid foundation in both robotics and IoT, enabling you to explore the convergence of these two cutting-edge technologies."/>
       <Cards head="Networking and Cloud computing" im={2} para="Whether you're a student, an aspiring IT professional, or a business owner seeking to leverage cloud services, this course will provide you with the expertise necessary to navigate the dynamic landscape of networking and cloud computing." />
       <Cards  head="Industrial 4.0 Projects" im={3} para="Industry 4.0 projects are at the forefront of this revolution, focusing on the integration of cutting-edge technologies to enhance productivity, reduce costs, and drive innovation."/>
      </div>
    </div>
  )
}
