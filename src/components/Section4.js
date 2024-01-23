import React from 'react';

const FileManager = ({ files }) => {
  return (
    <div className="file-manager">
      {files.map((file, index) => (
        <div className="file-item" key={index}>
          <div className="file-icon">
            {/* Render the file icon */}
            <img src={file.icon} alt="File Icon" />
          </div>
          <div className="file-details">
            <h3>{file.title}</h3>
            <p>{file.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileManager;




















// import React from 'react';
// import { IoIosPeople } from "react-icons/io";
// import { BsBuildings } from "react-icons/bs";
// import { HiOutlineHandRaised } from "react-icons/hi2";
// import './Section4.css';

// const Section4 = () => {
//   const array=[
//     {
//       icon:<IoIosPeople />,
//       title:"Membership and Organisations",
//       content:"Our membership management software provides full automation of membership renewels and payments"
//     },
//     {
//       icon:<BsBuildings />,
//       title:"National Associations",
//       content:"Our membership management software provides full automation of membership renewels and payments"
//     },
//     {
//       icon:<HiOutlineHandRaised />,
//       title:"Clubs and Groups",
//       content:"Our membership management software provides full automation of membership renewels and payments"
//     }

//   ]
//   return (
//     <div className='Nexcent'>

//     </div>
//   )
// }

// export default Section4











// /*      <div className='people'>
//       <IoIosPeople className='icons' />
//       <h3>Membership<br />Organisations</h3>
//       <p className='para'>Our membership management<br /> software provides full automation of<br /> membership renewals and payments</p>
//       </div>
//       <div className='people1'>
//       <BsBuildings className='icons'/>
//       <h3>National<br />Associations</h3>
//       <p className='para'>Our membership management<br /> software provides full automation of<br /> membership renewals and payments</p>
//       </div>
//       <div className='people2'>
//       <HiOutlineHandRaised className='icons'/>
//       <h3>Clubs And <br />Groups</h3>
//       <p className='para'>Our membership management<br /> software provides full automation of<br /> membership renewals and payments</p>
//       </div>
//  */



