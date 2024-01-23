import React from 'react'
import Images from './Images/regitration.png';
import './Section5.css';

const Section5 = () => {
  return (
    <div>
        <div className='picture'>
            <img src={Images} alt='template' className='images'></img>
        
        <div className='pixel'>
            <h3 className='sec'>The unseen of spending three<br />years at Pixelgrade</h3>
            <p className='para'>Lorem ipsum dolor sit amet, consectetur adopiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla.Pellentesque placerat vestibulum lorem sed porta. Nullam matis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar,aliquam quam vitae, tempus sem. Donec elementum pulvinar odio. </p>
            <button className='registration'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Section5