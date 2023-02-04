import React from 'react';
import './Publicite.css';
import Seeds from '../../img/Seeds.png';
import Accessories from '../../img/Accessories.png';
import Newarrival from '../../img/Newarrival.png';
import Shipping from '../../img/Shipping.png';
import { BsDashLg } from "react-icons/bs";




const Publicite =() =>{
    return(
       <div className='publicite'>
        
        <div className='pub'>
        <img className='Accessories' src={Accessories}/>  
        <img className='Newarrival' src={Newarrival}/>
       

       
      
       <img className='Seeds' src={Seeds}/>
       <img  className='Shipping'src={Shipping}/>
       
       
       </div>
       <div>
       
       </div>
       </div>
      
        
    )
}
export default Publicite