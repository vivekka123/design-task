import React from 'react';
import './HorizontalCard.css'; 
import Image from './Images/Illustration.png';

const HorizontalCard = () => {
  return (
    <div className="horizontal">
      <div className="card1">
    
        <h1 className='lessons'>Lessons and insights</h1>
        <h1 className='division'>from 8 years</h1>
        <p className='para'>Where to grow your busuness as a photographer:site or social media?</p>
        <button className='registration'>Register</button>
      </div>

      <div className="card2">
        <img src={Image} alt="Image 2" className='image'/>
      </div>

    
    </div>
  );
};

export default HorizontalCard;
