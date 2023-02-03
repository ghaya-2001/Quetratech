import React from 'react';
import './Feature.css'
import Product1 from '../../img/Product1.png';
import Product2 from '../../img/Product2.png';
import Product3 from '../../img/Product3.png';



const Feature =() =>{
    return(
       <div className='feature'>
        <div className='feature-container'>

            {/**left side */}
        <div className='left-feature'>
            <div className='featuretitle'>Featured <br/>Products</div>
            <h5 className='feature-paragraph'>Scroll through our featured and<br/> most purchased items</h5>
            <button className='feature-button'>See All</button>
        </div>
            {/**right side */}
        <div className='right-feature'>
            <div className='Products'>
                <div> 
                    <img className='product1 ' src={Product1} alt=''/>  
                    <div className='price1'>
                    <h4>Zamioculcas zamiifolia</h4>
                    <h4> $27</h4>
                     </div>
                </div>
               <div>
                    <img className='product2' src={Product2} alt=''/>
                    <div className='price2'>
                    <h4>Alocasia macrorrhiza</h4>
                    <h4> $19</h4>
                    </div>
               </div>
                <div>
                <img className='product3' src={Product3} alt=''/>
                <div className='price3'>
                    <h4> Monstera</h4>
                    <h4> $15</h4>
                </div>
                </div>
                
            </div>
            
        </div>
       </div>
       </div>

      
        
    )
}
export default Feature