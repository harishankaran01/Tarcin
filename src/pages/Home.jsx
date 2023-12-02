import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Content from '../Components/Content';
import Links from '../Components/Links'
import Services from '../Components/Services';
import Print from '../Components/Print';
import Offer from '../Components/Offer';
import Code from '../Components/Code';
import Allcourse from '../Components/Allcourse';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
    <Navbar/>
   <Content/>
    <Links/>
    <Services/>
    <Code/>
    <Print/>
    <Offer/>
    <Allcourse/>
    <Footer/>

    
    
    </>
  )
}
