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
       
        {/**content of images */}
        <div >
       
        
       

        {/**images */}  
        <div className='pub'>
       <img className='Accessories' src={Accessories}/>
        <img className='Newarrival' src={Newarrival}/>
        <img className='Seeds' src={Seeds}/>
        <img className='Shipping' src={Shipping}/>
       </div>
       <div className='all'>

<div className='accessories' >
<p className='p1'>SeedPacket</p>
<p className='p2'>Seemore </p>
</div>
<div className='seed' >
<p className='p3'>HousePlantAccessories</p>
<p className='p4'>Seemore </p>
</div>
<div className='shipping' >
<p className='p5'>ShippingInfo</p>
<p className='p6'>Seemore </p>
</div>
<div className='newarrival' >
<p className='p7'>NewArrivals</p>
<p className='p8'>Seemore </p>
</div>
</div>
      
       
       </div>

  
      

       




       </div>
      
        
    )
}
export default Publicite