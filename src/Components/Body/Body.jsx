import React from 'react';
import Feed1 from '../../img/Feed1.png';
import Feed2 from '../../img/Feed2.png';
import Feed3 from '../../img/Feed3.png';
import Feed4 from '../../img/Feed4.png';
import Plantcare from '../../img/Plantcare.png';
import Quiz from '../../img/Quiz.png';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Body.css'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Body =() =>{
    return(
        <div className="body">
          {/**contenu 1 */}
          <div className='Body'>
          <div>
             <img  className='body-img' src={Quiz}/>
          </div>
          <div>
            <h1 className='body-h'>Find Your Perfect Plant</h1>
          </div>
          </div>

          {/**contenu 2 */}
           <div className="Body1">
                <h1 className='body-h1'>Plant care instructions </h1>
            </div>  
            <div>  
                <img className='bodyplantcare' src={Plantcare} alt=''/> 
            </div>


          {/**dernier contenu  */}
         <div className='debut '>
            <div className='contenu'>
            <div className='body-contenu'>Instagram feed</div>
            <h5 className='body-h5'>Connect with us on social and share your plants with #cloreshouse</h5>
          </div>
          <Carousel  responsive={responsive}>

          <img className='feed1' src={Feed1} alt=''/>
          <img className='feed2' src={Feed2} alt=''/>         
          <img className='feed3' src={Feed3} alt=''/>    
          <img className='feed4' src={Feed4} alt=''/>
         
          </Carousel>
         </div>
           
        </div>

      
        
    )
}
export default Body