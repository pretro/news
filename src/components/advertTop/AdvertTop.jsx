import React from 'react';
import "./advertTop.scss";

const AdvertTop = () => {
  return (
    <div className='advertTop'>
        <div className='advertTopContainer'>
            <div className='Left'>
                <a>
                    <img className='imagen' src='assets/world.jpg' alt='logo'/>
                </a>
            </div>
            <div className='right'>
                <a>
                    <img src='assets/advertttt.gif' alt='reklam' />
                </a>
            </div>
        </div>     
    </div>
  )
}

export default AdvertTop;
