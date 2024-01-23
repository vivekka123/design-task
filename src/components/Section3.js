import Card from 'react-bootstrap/Card';
import Image1 from './Images/Logo1.png';
import Image2 from './Images/Logo2.png';
import Image3 from './Images/Logo3.png';
import Image4 from './Images/Logo4.png';
import Image5 from './Images/Logo5.png';
import Image6 from './Images/Logo6.png';
import Image7 from './Images/Logo7.png';
import './Section3.css';

const ImageGallery = () => {
  const imagePaths = [Image1,Image2,Image3,Image4,Image5,Image6,Image7]; // Array containing imported image paths

  return (
    <div>
       <Card>
      <Card.Body className='text'>Our Clients</Card.Body>
      <Card.Body className='para1'>We have been working with some Fortune 500+ clients</Card.Body>
      <Card.Body>
      <div className="image-container">
        {imagePaths.map((imagePath, index) => (
          <img key={index} src={imagePath} alt={`Image ${index}`} width={"10%"} className='imagess' />
        ))}
        <Card.Body>
        <h2 className='text'>Manage your entire community<br /> in a single system</h2>
        <p className='para1'>Who is Nextcent suitable for?</p>
        </Card.Body>
        </div>
      </Card.Body>
    </Card>
    
    </div>
  );
};

export default ImageGallery;





















































// const ImageArrayComponent = () => {
//   // Initialize the state with an array of image URLs
//   const [images, setImages] = useState([Image1,Image2,Image3,Image4,Image5,Image6,Image7
    
//     // Add more image URLs as needed
//   ]);

//   return (
//     <div>
//       <h1>Image Array Example</h1>
//       <div style={{ display: 'flex' }}>
//         {/* Displaying images horizontally */}
//         {images.map((imageUrl, index) => (
//           <img
//             key={index}
//             src={imageUrl}
//             alt={`Image ${index + 1}`}
//             style={{ width: '200px', height: 'auto', margin: '5px' }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageArrayComponent;






























// import React, { useState } from 'react';

// const ArrayComponent = () => {
//   // Initialize the state with an empty array
//   const [items, setItems] = useState([]);

//   // Function to add items to the array
//   const addItem = () => {
//     const newItem = `Item ${items.length + 1}`;
//     setItems([...items, newItem]);
//   };

//   return (
//     <div>
//       <h1>Array Example</h1>
//       <button onClick={addItem}>Add Item</button>
//       <div style={{ display: 'flex' }}>
//         {/* Displaying array items horizontally */}
//         {items.map((item, index) => (
//           <span key={index}>{item} </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ArrayComponent;
