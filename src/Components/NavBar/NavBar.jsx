import React, { useState } from 'react';
import  LogoWhite from '../../img/LogoWhite.png';
import { BsBagFill } from "react-icons/bs";
import { CiZoomIn} from "react-icons/ci";
import { BsFillPersonFill } from "react-icons/bs";
import './NavBar.css'
import {Link} from 'react-scroll'


const NavBar =() =>{

    const[color,setColor]=useState(false);
    const changeColor=()=>{
        if (window.scrollY >=100){
            setColor(true)
        }else{setColor(false);
        }
    }
    window.addEventListener("scroll",changeColor);

    return(

        <div className={color?"header header-bg" :"header"}> 
           <img className='h1' src={LogoWhite} alt='' />
            <ul className='nav-menu'>        
           <ul><Link spy={true} to='NavBar'  smooth={true} activeClass='activeClass'>About us </Link> </ul> 
           <ul><Link spy={true} to='Body'  smooth={true} activeClass='activeClass'>Shop </Link>  </ul>
           <ul><Link spy={true} to='body'  smooth={true} activeClass='activeClass'>Blog </Link></ul>
           <ul><Link spy={true} to='Footer'  smooth={true} activeClass='activeClass'>Contact </Link>  </ul>
           </ul>
            <div className='icons'>
            <ul className='icons-menu'> 
            <ul><CiZoomIn/></ul>       
            <ul>< BsFillPersonFill/></ul> 
            <ul><BsBagFill/> </ul>
           
           </ul> 
            </div>
        </div>
        
    )
}
export default NavBar