import React from 'react';

import './Footer.css'
const Footer =() =>{
    return(
        <div className="footer">
            
            <div className="footer-container">
                
                <div className='left'>
                <p className='p'>We’re your online houseplant destination.<br/> We offer a wide range of houseplants and <br/>accessories shipped directly from our <br/>green-house to yours!</p>
                <h4 className='exc'>Exclusive offers & first and first access to products</h4>
                <input type="text" name='user_name' className='email'placeholder='Email'/>
                 </div>
                 
                <div className='right'>
                    <div className='list'>
                   
                    <ul>
                        <h4 className='h4'>About</h4>
                        <div className='parg'>
                        <p>Teams</p>
                        <p>Careers</p>
                        <p>DigitalAccessibility</p>
                        <p>Brand Protection</p>
                        <p>FAQ</p>
                        </div>
                    </ul>
                    <ul>
                        <h4 className='h4'>Store</h4>
                        <div className='parg'>
                        <p>California</p>
                        <p>New York</p>
                        <p>Los Angelos</p>
                        </div>
                    </ul>
                    <ul>
                        <h4 className='h4'>FollowUs</h4>
                        <div className='parg'>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Twitter </p>
                        <p>Pinterest</p>
                        <p>Youtube</p>
                        </div>
                    </ul>
                    <ul>
                        <h4 className='h4'>OurPolitics</h4>
                        <div className='parg'>
                        <p>Sitemap</p>
                        <p>Terms&conditions</p>
                        <p>Policy Privacy </p>
                        <p>Returns</p>
                        </div>
                    </ul>
                   
                    </div>
                </div>
                  
            </div>
            
        </div>

      
        
    )
}
export default Footer