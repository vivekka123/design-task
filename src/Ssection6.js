import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import Images1 from './Images/logos2.jpg';

import React from 'react'
import CardText from 'react-bootstrap/esm/CardText';
import './Ssection6.css';
// import Button from 'react-bootstrap/esm/Button';
import Images2 from './Images/nexcent3.jpg';
import Image1 from './Images/Logo1.png';
import Image2 from './Images/Logo2.png';
import Image3 from './Images/Logo3.png';
import Image4 from './Images/Logo4.png';
import Image5 from './Images/Logo5.png';
import Image6 from './Images/Logo6.png';

import { IoMdArrowForward } from "react-icons/io";
const SSection6 = () => {
    const imagePaths = [Image1,Image2,Image3,Image4,Image5,Image6];
  return (
    <div>
       <CardGroup className='carding-group'>
        <Card className='carding1'>
            <Card.Text className='card-text3'>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </Card.Text>
            <CardText className="card-text4">
            Tim Smith
            </CardText>
            <Card.Text className='card-text5'>
            British Dragon Boat Racing Association
            </Card.Text>
            <Card.Text className='card-text6'>
            {imagePaths.map((imagePath, index) => (
          <img key={index} src={imagePath} alt={`Image ${index}`} width={"7%"} className='imagess3'/>
        ))}
          Meet all customers <IoMdArrowForward />
            </Card.Text>
        </Card>
        <Card className='carding'>
            <Card.Img src={Images2} className='cards-group2'/>
        </Card>
        </CardGroup> 
    </div>
  )
}

export default SSection6