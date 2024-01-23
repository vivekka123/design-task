import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Images from './Images/regitration.png';

import React from 'react'
import CardText from 'react-bootstrap/esm/CardText';
import './Ssection4.css';
import Button from 'react-bootstrap/esm/Button';

const SSection4 = () => {
  return (
    <div>
       <CardGroup className='card-grouping mb-3'>
        <Card className='carding row g-0'>
            <Card.Img src={Images} className='cards-group'/>
        </Card>
        <Card className='carding1'>
            <Card.Title className='card-title1'>
            The unseen of spending three<br />years at Pixelgrade
            </Card.Title>
            <CardText className="card-text1">
            Lorem ipsum dolor sit amet, consectetur adopiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla.Pellentesque placerat vestibulum lorem sed porta. Nullam matis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar,aliquam quam vitae, tempus sem. Donec elementum pulvinar odio. 
            </CardText>
            <Button className='register'>Learn More</Button>
        </Card>
        </CardGroup> 
    </div>
  )
}

export default SSection4