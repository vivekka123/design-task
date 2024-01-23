import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section6.css';
import { IoPeople } from "react-icons/io5";
import { FaRegHand } from "react-icons/fa6";
import { BsHandIndexThumb } from "react-icons/bs";
import { FaBoxArchive } from "react-icons/fa6";
import ListGroup from 'react-bootstrap/ListGroup';

function AutoLayoutExample() {
  return (
    <Container fluid>
      <Row className='local1'>
        <Col className='navbars'>
          <h1 className='helping'>Helping a local</h1>
          <h2 className='business'>business reinvent itself</h2>
          <p className='paragraph'>We reached here with our hard work and dedication</p>
        </Col>
        <Col className='increase'>
          <ListGroup horizontal>
            <ListGroup.Item className='list-group'>
              <IoPeople /> 2,245,341 <br />Members
            </ListGroup.Item>
            <ListGroup.Item className='list-group'>
              <FaRegHand /> &nbsp; 46,328 <br />Members
            </ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item  className='list-group'>
              <BsHandIndexThumb /> &nbsp;828,867 <br />Members
            </ListGroup.Item>
            <ListGroup.Item className='list-group'> 
              <FaBoxArchive /> &nbsp; 1,926,436 <br /> Members
            </ListGroup.Item>
            </ListGroup>
            </Col>
            </Row>
            </Container>
  );
}

export default AutoLayoutExample;




































































































































// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import Image1 from './Images/Logo1.png';
// import Image2 from './Images/Logo2.png';
// import Image3 from './Images/Logo3.png';
// import Image4 from './Images/Logo4.png';
// import Image5 from './Images/Logo5.png';
// import Image6 from './Images/Logo6.png';
// import Image7 from './Images/Logo7.png';
// import './Section3.css';

// function ContainerExample() {
//   const imagePaths = [Image1,Image2,Image3,Image4,Image5,Image6,Image7];
//   return (
//     <Container>
//       <Row>
//         <Col>
//         <h1 className='text'>Our Clients</h1>
//       <p className='para1'>We have been working with some Fortune 500+ clients</p>
//       <div className="image-container">
//         {imagePaths.map((imagePath, index) => (
//           <img key={index} src={imagePath} alt={`Image ${index}`} width={"8%"} className='imagess' />
//         ))}
//         <h2 className='text'>Manage your entire community<br /> in a single system</h2>
//         <p className='para1'>Who is Nextcent suitable for?</p>
//         </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default ContainerExample;









































/*<CardGroup className='horizontal'>
        <Card className='card1'>
            <Card.Text className='lessons'>Lessons and insights</Card.Text>
            <Card.Text className='division'>from 8 years</Card.Text>
            <Card.Text className='para'>Where to grow your business as a photographer:site or social media?</Card.Text>
            <button className='registration'>Register</button>
        </Card>
        <Card className='card2'> 
            <Card.Img src={Image} className='image' />
        </Card>
       
        </CardGroup> */