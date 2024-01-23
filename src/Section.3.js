import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import { IoIosPeople } from "react-icons/io";
// import { BsBuildings } from "react-icons/bs";
// import { HiOutlineHandRaised } from "react-icons/hi2";
import Icon5 from './Images/Icon5.png';
import Icon6 from './Images/Icon6.png';
import Icon7 from './Images/Icon7.png';
import './Section.3.css';

function GroupExample() {
  return (
    <CardGroup className='container'>
      <Card className='card-manage'> 
        <Card.Body>
          <Card.Title className='media-cards'>
          <img src={Icon5} alt='icon5' className='card-icon' />
          <h3>Membership<br />Organisations</h3>
          </Card.Title>
          <Card.Text>
          Our membership management<br /> software provides full automation of<br /> membership renewals and payments
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title className='media-cards'>
          <img src={Icon6} alt='icon6' className='card-icon'/>
          <h3>National<br />Associations</h3>
          </Card.Title>
          <Card.Text>
          Our membership management<br /> software provides full automation of<br /> membership renewals and payments
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title className='media-cards'>
          <img src={Icon7} alt='icon7' className='card-icon'/>
          <h3>Clubs And <br />Groups</h3>
          </Card.Title>
          <Card.Text>
          Our membership management<br /> software provides full automation of<br /> membership renewals and payments
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;










































// import Card1 from 'react-bootstrap/Card';

// import { IoIosPeople } from "react-icons/io";
// import { BsBuildings } from "react-icons/bs";
// import { HiOutlineHandRaised } from "react-icons/hi2";

// import './Section.3.css';

// function TextExample() {
//   return (
//     <div>
//     <Card1 style={{ width: '18rem' }}  className='people3'>
//       <Card1.Body >
//         <Card1.Text>
//         <IoIosPeople className='icons1' />
//         </Card1.Text>
//         <Card1.Title className='member'> 
//         Membership<br />Organisations
//         </Card1.Title>
//         <Card1.Text>
//         Our membership management<br /> software provides full automation of<br /> membership renewals and payments
//         </Card1.Text>
//       </Card1.Body>
//     </Card1>
//     <Card1 style={{ width: '18rem' }} className='people4' >
//     <Card1.Body >
//       <Card1.Text>
//       <BsBuildings className='icons1'/>
//       </Card1.Text>
//       <Card1.Title>
//       National<br />Associations
//       </Card1.Title>
//       <Card1.Text>
//       Our membership management<br /> software provides full automation of<br /> membership renewals and payments
//       </Card1.Text>
//     </Card1.Body>
//   </Card1>
//   <Card1 style={{ width: '18rem' }} className='people5' >
//     <Card1.Body className='people5'>
//       <Card1.Text>
//       <HiOutlineHandRaised className='icons1'/>
//       </Card1.Text>
//       <Card1.Title>
//       Clubs And <br />Groups
//       </Card1.Title>
//       <Card1.Text>
//       Our membership management<br /> software provides full automation of<br /> membership renewals and payments
//       </Card1.Text>
//     </Card1.Body>
//   </Card1>
//   </div>
//   );
// }

// export default TextExample;




/*import React, { useState, useEffect } from 'react';

const ScrollNumberIncrease = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      // You can adjust the increment value based on your requirements
      const increment = 1; // Change this to adjust the increment value

      // Example: Increase number by 1 for every 100 pixels scrolled
      if (scrolled % 100 === 0) {
        setNumber(prevNumber => prevNumber + increment);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Scroll down to increase the number!</h1>
      <p>Number: {number}</p>
      <div style={{ height: '2000px' }}> {/* Add enough content to enable scrolling 
//       Scrollable content...
//       </div>
//     </div>
//   );
// };

// export default ScrollNumberIncrease;
//  */