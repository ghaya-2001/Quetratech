import React from 'react';
import  LogoMark from '../../img/LogoMark.png';

import './Clores.css'
const Clores =() =>{
    return(
        <div className="Clores">
            <div className="Clores-container">
               <div className='Left'>
                <img className='clores_img' src={LogoMark} alt=''/>
               </div>
                <div className='Right'>
                    <div className='welcome-paragraph'>
                    <h1 className='welcome'>welcome to Clores!</h1> 
                    <div className='paragraph'>We are a group of friends that all had a passion for nature and the<br/> outdoors.Turns out, having a home filled with plants was something<br/> we continued to have in common. We found it difficult to find a place<br/> online to purchase houseplants that was easy to navigate and wasn’t <br/>
                    just geared to wholesale. So, in 2020, we decided to launch to be the<br/> ultimate destination for everything houseplants.<br/>
                    Please enjoy exploring Clores.</div>
                    </div>
                </div>
            </div>
            
        </div>

      
        
    )
}
export default Clores