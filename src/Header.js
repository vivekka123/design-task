import React from 'react'
import Logo from './Images/Logopic.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { IoMdArrowForward } from "react-icons/io";
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    
    <div className='container '>
        <div className='Header'>
         <Navbar data-bs-theme="light" className='res'>
            <Container className='header'>
             <img src={Logo} alt='logo' className='logo'>
              <h2>Nexcent</h2>
             </img>
                <Nav className="justify-content-end">
               
                    <Nav.Link href="#home"><b>Home</b></Nav.Link>
                    <Nav.Link href="#features" ><b>Features</b></Nav.Link>
                    <Nav.Link href="#community" ><b>Community</b></Nav.Link>
                    <Nav.Link href="#Blogs" ><b>Blogs</b></Nav.Link>
                    <Nav.Link href="#pricing" ><b>Pricing</b></Nav.Link>
                    <Button  className='register-button'>Register<IoMdArrowForward /></Button>
                </Nav>
            </Container>
            </Navbar>
            </div>
    </div>
  )
}

export default Header