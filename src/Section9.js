import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Imagess1 from './Images/image-18.webp';
import Imagess2 from './Images/image-19.webp';
import Imagess3 from './Images/image-20.webp';
import { IoMdArrowForward } from "react-icons/io";
import './Section9.css';
import CardGroup from 'react-bootstrap/CardGroup';

const Section9 = () => {
  const [isHover, setIsHover]=useState(false);
  const [isHovering, setIsHovering]=useState(false);
  const [isHovered, setIsHovered]=useState(false);

  const handleMouseOver=()=>{
    setIsHover(true);
  };

  const handleMouseOut=()=>{
    setIsHover(false);
  };

  const handleMouseOvering=()=>{
    setIsHovering(true);
  };

  const handleMouseOuting=()=>{
    setIsHovering(false);
  };

  const handleMouseOvered=()=>{
    setIsHovered(true);
  };

  const handleMouseOuted=()=>{
    setIsHovered(false);
  };

  return (
    <div>
    <CardGroup>
      <Card className='card-detail'>
        <Card.Img variant="top" src={Imagess1} className='position' 
        onMouseUp={handleMouseOver}
        onMouseMove={handleMouseOut}
        />
        {isHover &&(
         <div className='position1'>Creating Streamlined<br />Safeguarding Processes with<br />OneRen
           <p className='readmore'>Readmore <IoMdArrowForward /></p></div>
           )}
      </Card>
      <Card className="card-detail">
        <Card.Img variant="top" src={Imagess2} className='position'
        onMouseUp={handleMouseOvering}
        onMouseMove={handleMouseOuting}
        />
        {isHovering && (
       <div className='position1'>What are your safeguarding<br />responbilities and how can <br />you manage them?
       <p className='readmore'>Readmore <IoMdArrowForward /></p>
       </div>
       )}
      </Card>
      <Card className="card-detail">
        <Card.Img variant="top" src={Imagess3} className='position' 
         onMouseUp={handleMouseOvered}
         onMouseMove={handleMouseOuted}
        />
        {isHovered && (
      <div className='position1'>Revamping the Membership<br />Model with Triathlon<br />Australia
      <p className='readmore'>Readmore <IoMdArrowForward /></p>
      </div>
      )}
      </Card>
    </CardGroup>
    </div>
  )
}

export default Section9


















/*<h3 className='text'>Caring is the new marketing</h3>
        <p className='para1'>The Nexcent blog is the best place to read about the latest membership insights,<br /> trends and more. See who's joining the community, read about how our community <br />are increasing their membership income and lot's more.​</p>
        <Card style={{ width: '18rem' }}>
          <div className='top'>
      <Card.Img variant="top" src={Imagess1} className='imagess4'/>
      <Card.Body>
        <Card.Text className='Text'>
          Creating Streamlined<br />Safeguarding Processes with OneRen
          <p>Readmore <IoMdArrowForward /></p>
        </Card.Text>
      </Card.Body>
      </div>
    </Card>
    <Card style={{ width: '18rem' }}>
      <div className='top1'>
      <Card.Img variant="top" src={Imagess2} />
      <Card.Body>
        <Card.Text>
          What are your safeguarding<br />responbilities and how can you manage them?
        <p>Readmore <IoMdArrowForward /></p>
        </Card.Text>
      </Card.Body>
      </div>
    </Card>
    <Card style={{ width: '18rem' }}>
      <div className='top2'>
      <Card.Img variant="top" src={Imagess3} />
      <Card.Body>
        <Card.Text>
         Revamping the Membership<br /> Model with Triathlon<br />Australia 
        <p>Readmore <IoMdArrowForward /></p>
        </Card.Text>
      </Card.Body>
      </div>
    </Card> */