import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Images1 from './Images/logos2.jpg';

import React from 'react'
import CardText from 'react-bootstrap/esm/CardText';
import './Ssection5.css';
import Button from 'react-bootstrap/esm/Button';

const SSection5 = () => {
  return (
    <div>
       <CardGroup className='card-grouping1'>
        <Card className='carding'>
            <Card.Img src={Images1} className='cards-group9'/>
        </Card>
        <Card className='carding1'>
            <Card.Title className='card-title2'>
            How to design your site footer we did
            </Card.Title>
            <CardText className="card-text1">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </CardText>
            <Button className='register'>Learn More</Button>
        </Card>
        </CardGroup> 
    </div>
  )
}

export default SSection5