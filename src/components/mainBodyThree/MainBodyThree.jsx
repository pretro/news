import React from 'react';
import './mainBodyThree.scss';
import StyleOne from './../styleOne/StyleOne';
import StyleTwo from './../styleTwo/StyleTwo';
import { HealthFitness, LifeStyle } from '../../category';

const MainBodyThree = () => {
  return (
    <div className='mainBodyThree'>
        <div className='mainBodyThreeWrapper'>
            <div className='item'>
                <StyleOne {...HealthFitness} />
            </div>
            <div className='item'>
                <StyleTwo {...LifeStyle} />
            </div>
            <div className='item'></div>
        </div>
    </div>
  );
};

export default MainBodyThree;
