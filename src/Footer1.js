import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState } from 'react'
import Logos from './Images/nexcent4.jpg';
import { CiInstagram } from "react-icons/ci";
import { SiGooglechrome } from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import './Footer1.css';

function HorizontalExample() {
  const [email,setEmail]=useState();
  const [errorEmail,setErrorEmail]=useState(false)
  const icons = [<CiInstagram />,<SiGooglechrome />,<IoLogoTwitter />,<FaYoutube />];
  const handleSubmit =()=>{
   let validEmail=/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/
   if(!validEmail.test(email)){
    setErrorEmail(true)
   }
  }
  return (
    <ListGroup horizontal className='list-group'>
      <ListGroup.Item>
      <img src={Logos} alt='logo' width={"40%"} className='logo1'></img>
      <p className='logo2'>Copyright &copy; 2020 Landify UI Kit.</p>
      <p className='logo3'>All rights reserved</p>
      <div className='logo4'>
      {icons.map((icon, index) => (
          <div className='map' key={index}>{icon}</div>
        ))}
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
      <h5 className='heading'>Company</h5>
        <p>About us</p>
        <p>Blog</p>
        <p>Contact us</p>
        <p>Pricing</p>
        <p>Testimonials</p>
      </ListGroup.Item>
      <ListGroup.Item>
      <h5 className='heading'>Support</h5>
        <p>Help center</p>
        <p>Terms of service</p>
        <p>Legal</p>
        <p>Privacy policy</p>
        <p>Status</p>

      </ListGroup.Item>
      <ListGroup.Item>
      <h5 className='heading'>Stay up to date</h5>
        <input 
        type='search'
        placeholder='Your email address'
        id="emailId"
        name="emailId"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        /><BiLogoTelegram   onClick={handleSubmit}/><br />
          {errorEmail && <p>Your email is invalid</p>}
      </ListGroup.Item>
    </ListGroup>
  );
}

export default HorizontalExample;




























// import React, { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';

// const App = () => {
//   const [cookieValue, setCookieValue] = useState(null);
//   const increaseAmount = 0; // Change this to any value you want to increase the cookie by

//   useEffect(() => {
//     // Get the current cookie value or set it to 0 if it doesn't exist
//     const initialCookieValue = parseInt(Cookies.get('myCookie')) ;
//     setCookieValue(initialCookieValue);

//     // Increase the cookie value and update the cookie
//     const updatedValue = initialCookieValue + increaseAmount;
//     Cookies.set('myCookie', updatedValue);

//     // Cleanup: Reset cookie value in state when component unmounts
//     return () => {
//       setCookieValue(null);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Cookie Example</h1>
//       <p>Cookie Value: {cookieValue}</p>
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';

// const App = () => {
//   const [cookieValue, setCookieValue] = useState(1);

//   useEffect(() => {
//     // Set a cookie
//     Cookies.set('myCookie', 'cookieValue');

//     // Get a cookie
//     const myCookie = Cookies.get('myCookie');
//     setCookieValue(myCookie);

//     // Remove a cookie after 5 seconds (for demonstration purposes)
//     setTimeout(() => {
//       Cookies.remove('myCookie');
//       setCookieValue(4); // Reset cookie value in state
//     }, 5000);
//   }, []);

//   return (
//     <div>
//       <h1>Cookie Example</h1>
//       <p>Cookie Value: {cookieValue}</p>
//     </div>
//   );
// };

// export default App;





// import React, { useState, useEffect } from 'react';

// const ScrollComponent = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [number, setNumber] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentPosition = window.pageYOffset;
//       setScrollPosition(currentPosition);
//     };

//     const handleScrollEnd = () => {
//       // You can adjust the threshold to determine when to increase the number
//       const threshold = 1; // Adjust this value as needed
//       const isScrollingStopped = () => {
//         const currentPosition = window.pageYOffset;
//         if (Math.abs(scrollPosition - currentPosition) < threshold) {
//           return true;
//         }
//         return false;
//       };

//       if (isScrollingStopped()) {
//         setNumber(prevNumber => prevNumber + 1);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Debounce the scroll end event to wait for scrolling to stop before updating the number
//     let timeoutId;
//     window.addEventListener('scroll', () => {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(handleScrollEnd, 200); // Adjust the debounce time as needed
//     });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('scroll', handleScrollEnd);
//     };
//   }, [scrollPosition]);

//   return (
//     <div>
//       <p>Scroll position: {scrollPosition}</p>
//       <p>Number after scroll: {number}</p>
//       <div style={{ height: '2000px' }}>Scrollable content</div>
//     </div>
//   );
// };

// export default ScrollComponent;















// import React, { useState, useEffect } from 'react';

// const ScrollNumberIncrease = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const position = window.scrollY;
//       setScrollPosition(position);
//     };

//     // Attach the scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Calculate the number based on scroll position (adjust the rate as needed)
//   const number = Math.floor(scrollPosition / 10); 

//   return (
//     <div style={{ height: '2000px', paddingTop: '500px', textAlign: 'center' }}>
//       <div style={{ fontSize: '48px' }}>{number}</div>
//     </div>
//   );
// };

// export default ScrollNumberIncrease;










// import React, { useState, useEffect } from 'react';

// const ScrollNumberIncrease = () => {
//   const [number, setNumber] = useState(0);

//   // Function to update the number based on scroll position
//   const updateNumberOnScroll = () => {
//     const scrollPosition = window.scrollY; // Get the current scroll position
//     const increaseRate = 1; // Change this value to adjust the speed of increase

//     // Calculate the number based on scroll position
//     const newNumber = Math.floor(scrollPosition / 10) * increaseRate; // Adjust the division and multiplier as needed

//     // Update the number state
//     setNumber(newNumber);
//   };

//   // Effect to add scroll event listener on component mount
//   useEffect(() => {
//     window.addEventListener('scroll', updateNumberOnScroll);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', updateNumberOnScroll);
//     };
//   }, []); // Empty dependency array ensures the effect runs only once (on mount)

//   return (
//     <div style={{ height: '2000px', paddingTop: '500px', textAlign: 'center' }}>
//       <div style={{ fontSize: '48px' }}>{number}</div>
//     </div>
//   );
// };

// export default ScrollNumberIncrease;
