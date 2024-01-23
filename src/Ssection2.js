import React from 'react'
import Image from './Images/Illustration.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardText from 'react-bootstrap/esm/CardText';
import './Ssection2.css';
import Button from 'react-bootstrap/esm/Button';


const Ssection2 = () => {
  return (
    <div>
      {/* <Col className="sm-12 md-8"></Col>
      <Col className="sm-12 md-4"></Col> */}
        <CardGroup className='card-grouping4'>
        <Card className='card-section'>
            <Card.Title className='card-title5'>
            Lessons and insights
            </Card.Title>
            <CardText className='card-title6'>
            from 8 years
            </CardText>
            <CardText className="card-text8">
            Where to grow your bussiness as a photographer: site or social media?
            </CardText>
            <Button className='registration1'>Register</Button>
        </Card>
        <Card className='carding'>
            <Card.Img src={Image} className='cards-group7'/>
        </Card>
        </CardGroup>
    </div>
  )
}

export default Ssection2