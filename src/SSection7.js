import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoMdArrowForward } from 'react-icons/io';
import './Ssection7.css';

function HeaderAndFooterExample() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title className='card-titles1'>Pellentesue suscipit<br /> fringilla libero eu.</Card.Title>
        <Button variant="primary" className='button1'>Get a Demo<IoMdArrowForward /></Button>
      </Card.Body>
    </Card>
  );
}

export default HeaderAndFooterExample;