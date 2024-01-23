import React from 'react';
import FileManager from './Section4';


const YourApp = () => {
  // Sample data containing file details
  const files = [
    {
      icon: 'file-icon.png',
      title: 'Document 1',
      content: 'This is the content of document 1.',
    },
    {
      icon: 'file-icon.png',
      title: 'Document 2',
      content: 'This is the content of document 2.',
    },
    // Add more files as needed
  ];

  return (
    <div className="app-container">
      <h1>Your File Manager</h1>
      <FileManager files={files} />
    </div>
  );
};

export default YourApp;






































// import React from 'react'
// import Images1 from '../Images/logos2.jpg';
// import './Section7.css';

// const Section7 = () => {
//   return (
//     <div>
//           <div className='picture1'>
//             <img src={Images1} alt='template' className='images1'></img>
        
//         <div className='pixel1'>
//             <h3 className='sec1'>How to design your site footer we did</h3>
//             <p className='para'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
//             <button className='registration'>Learn More</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Section7