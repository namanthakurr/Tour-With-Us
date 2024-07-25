import React from 'react';
import Boating from "../video/Boating.mp4"; 

function Vacation() {
  return (
    <div className='center-container'>
      <div className='Vacation'>
        <div className='rectangle'>
            
          <div className='f'>
            <div className='Traveler'> 
              <p>VACATION FOR ALL <br/>
                <span>Travellers</span>
              </p>
            </div>
            <div className='image-container'>
              <img src="#" alt='coming soon...' className='image'/>
              <p>COUPLE</p>
            </div>
            <div className='image-container'>
              <img src="#" alt='coming soon...' className='image' />
              <p>FAMILY</p>
            </div>
            <div className='image-container'>
              <img src="#" alt='coming soon...' className='image' />
              <p>FRIENDS</p>
            </div>
            <div className='image-container'>
              <img src="#" alt='coming soon...' className='image' />
              <p>TEAM OUTING</p>
            </div>
          </div>
          
          <video src={Boating} autoPlay muted loop className='Mini-Vacation' />
        </div>
      </div>
    </div>
  );
}

export default Vacation;

