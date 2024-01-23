import Card from 'react-bootstrap/Card';
import Image1 from './Images/Logo1.png';
import Image2 from './Images/Logo2.png';
import Image3 from './Images/Logo3.png';
import Image4 from './Images/Logo4.png';
import Image5 from './Images/Logo5.png';
import Image6 from './Images/Logo6.png';
import Image7 from './Images/Logo7.png';
import './Ssection3.css';

function BodyOnlyExample() {
  const imagePaths = [Image1,Image2,Image3,Image4,Image5,Image6,Image7];
  return (
    <Card className='media-card'>
      <Card.Title className='card-title'>Our Clients</Card.Title>
      <Card.Text className='card-text'>We have been working with some Fortune 500+ clients</Card.Text>
      <div className='media-image'>
      <div className="image-container">
        {imagePaths.map((imagePath, index) => (
          <img key={index} src={imagePath} alt={`Image ${index}`} className='imagesss' />
        ))}
      </div>
      </div>
      <Card.Title className='card-title'>Manage your entire community<br /> in a single system</Card.Title>
      <Card.Body className='card-text'>Who is Nextcent suitable for?</Card.Body>
    </Card>
  );
}

export default BodyOnlyExample;