
import './Intro.css';
import  Header1 from '../../img/Header1.png';
import  Header3 from '../../img/Header3.png';
import  Header2 from '../../img/Header2.png';



function Intro() {
  return (
    <div className="Intro">
      <div className='debut'>
        <img className='intro-img' src={Header1} alt=''/>
      </div>
      <div className='photo-text'>
      <div className='content'><p>House Plants <br/> Delivered Directly <br/>To Your House </p></div>
      <div className='content1'><p>The best place to <br/>explore and buy plants <br/>online for 2022</p></div>
      <div className='content2'>Refresh your home with<br/>new vibrant and various<br/>plants this year
      </div>
      <img className='intro-img1' src={Header3} alt=''/>
      <img className='intro-img2'src={Header2} alt=''/>
      <div > <button className='button'>Shop Plants</button></div>
      
      </div>
    </div>
  );
}

export default Intro;