

 import React from 'react'
import Headerstudent from '../components/Headerstudent';
import Container from '../components/Container';
// import {Button} from  "@material-ui/core";
import Menustudent from '../components/Memustudent';
import Footer from '../components/Footer'; 
 
 export default function Feedstudent() {
   return (
     <div> 
        <Headerstudent/>
        <Menustudent/>
        <Container/>
        <Footer/>
        </div>
   )
 }

