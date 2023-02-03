import React from 'react';
import './Publicite.css';
import Seeds from '../../img/Seeds.png';
import Accessories from '../../img/Accessories.png';
import Newarrival from '../../img/Newarrival.png';
import Shipping from '../../img/Shipping.png';




const Publicite =() =>{
    return(
       <div className='publicite'>
        
        
        <img className='Accessories' src={Accessories}/>  
        <img className='Newarrival' src={Newarrival}/>
        

       
      
       <img className='Seeds' src={Seeds}/>
       <img  className='Shipping'src={Shipping}/>
       
       
       </div>

      
        
    )
}
export default Publicite