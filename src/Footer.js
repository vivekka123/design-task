import React, { useState } from 'react'
import Logos from './Images/nexcent4.jpg';
import { CiInstagram } from "react-icons/ci";
import { SiGooglechrome } from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
// import { BiLogoTelegram } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import './Footer.css';

const Footer = () => {
     const [email,setEmail]=useState();
     const [errorEmail,setErrorEmail]=useState(false)
     const icons = [<CiInstagram />,<SiGooglechrome />,<IoLogoTwitter />,<FaYoutube />];
     const handleSubmit =()=>{
      let validEmail=/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/
      if(!validEmail.test(email)){
       setErrorEmail(true)
      }
     }
  return (
    <div>
      <div className='footersection'>
      <div className='footer'>
      <img src={Logos} alt='logo' width={"40%"} className='logo1'></img>
      <p className='logo2'>Copyright &copy; 2020 Landify UI Kit.</p>
      <p className='logo3'>All rights reserved</p>
      <div className='logo4'>
      {icons.map((icon, index) => (
          <div className='map' key={index}>{icon}</div>
        ))}
        </div>
      </div>
      <div className='footer1'>
        <h5 className='heading'>Company</h5>
        <p>About us</p>
        <p>Blog</p>
        <p>Contact us</p>
        <p>Pricing</p>
        <p>Testimonials</p>
      </div>
      <div className='footer2'>
        <h5 className='heading'>Support</h5>
        <p>Help center</p>
        <p>Terms of service</p>
        <p>Legal</p>
        <p>Privacy policy</p>
        <p>Status</p>
      </div>
      <div className='footer3'>
        <h5 className='heading'>Stay up to date</h5>
        <div className='email1'>
        <input 
        type='search'
        placeholder='Your email'
        id="emailId"
        name="emailId"
        className='search text-white placeholder:text-netral-silver'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <div className='emails'>
        <MdEmail onClick={handleSubmit}/><br /><br />
        <div>
          {errorEmail && <p className='validate'>Your Email is Invalid</p>}
          </div>
          </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Footer