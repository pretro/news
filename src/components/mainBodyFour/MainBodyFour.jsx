import React from 'react'
import StyleTwo from './../styleTwo/StyleTwo';
import StyleOne from './../styleOne/StyleOne';
import { Entertainment, Politics} from './../../category';
import StyleThree from '../styleThree/StyleThree';
import './mainBodyFour.scss';

const MainBodyFour = () => {
  return (
    <div className='mainBodyFour'>
      <div className='mainBodyFourWrapper'>
        <div className='styleOne1'>
            <StyleTwo {...Politics}/>
        </div>
          <div className='styleTwo2'>
            <StyleOne {...Entertainment}/>
          </div>
        <div className='styleThree3'>
          <StyleThree/>
        </div>
      </div>
    </div>
  )
}

export default MainBodyFour;
