import React from 'react'
import { BsBuildings } from 'react-icons/bs'
import { HiOutlineHandRaised } from 'react-icons/hi2'
import { IoIosPeople } from 'react-icons/io'

const Json = () => {
   const TextArray= [
        {
            icon:<IoIosPeople />,
            title:"Membership Organisation",
            text:"Our membership management software provides full automation of membership renewals and payments"
        },
        {
            icon:<BsBuildings />,
            title:"National Associations",
            text:"Our membership management software provides full automation of membership renewals and payments"
        },
        {
            icon:<HiOutlineHandRaised />,
            title:"Clubs and Groups",
            text:"Our membership management software provides full automation of membership renewals and payments"
        }
    ]
  return (
    <div>
     {TextArray.map(TextArray=>(
        <li key={TextArray.icon}>
            {TextArray.title},
            {TextArray.text}
        </li>
     ))}
    </div>
  )
}

export default Json