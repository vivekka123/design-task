import React from 'react'
import './Section6.css';
import { IoPeople } from "react-icons/io5";
import { FaRegHand } from "react-icons/fa6";
import { BsHandIndexThumb } from "react-icons/bs";
import { FaBoxArchive } from "react-icons/fa6";
import ListGroup from 'react-bootstrap/ListGroup';

const Section6 = () => {
  return (
    <div className='local1'>
        <div className='local'>
            <h1 className='helping'>Helping a local</h1>
            <h2 className='business'>business reinvent itself</h2>
            <p className='paragraph'>We reached here with our hard work and dedication</p>
        </div>
        <div className='section6'>
        <div  className='subject'>
        <ListGroup horizontal>
      <ListGroup.Item>
      <IoPeople /> &nbsp;2,245,341 <br />Members
      </ListGroup.Item>
      <ListGroup.Item>
      <FaRegHand /> &nbsp; 46,328 <br />Members
      </ListGroup.Item>
    </ListGroup>
    <ListGroup horizontal>
      <ListGroup.Item>
      <BsHandIndexThumb /> &nbsp;828,867 <br />Members
      </ListGroup.Item>
      <ListGroup.Item>
      <FaBoxArchive /> &nbsp; 1,926,436 <br /> Members
      </ListGroup.Item>
    </ListGroup>
         </div>
        </div>
    </div>
  )
}

export default Section6