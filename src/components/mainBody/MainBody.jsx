import React from 'react';
import "./mainBody.scss";
import StyleOne from '../styleOne/StyleOne';
import StyleTwo from '../styleTwo/StyleTwo';
import Widget from "../widget/Widget";
import { Technology, WorldNews } from "../../category";
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';

const MainBody = () => {
  return (
    <div className='mainBody'>
        <div className="mainBodyWrapper">
            <div className='item'>
              <StyleOne {...WorldNews} />
            </div>
            <div className='item'>
              <StyleTwo {...Technology}/>
            </div>            
            <div className='item'>
              <Widget/>
            </div>
        </div>

        <div className='advertMiddleWrapper'>
          <div className='advert'>
            <a>
              <img src='assets/advertttt.gif' alt='advertisement' />
            </a>
          </div>

          <div className='newsLetter'>
            <div className='top'>
              <h2>Get newsLetter</h2>
              <FaRegEnvelopeOpen className='icon'/>
            </div>
            <div className='bottom'>
              <div className='bottomWrapper'>
                <div className='content'>
                  <p>
                  Subscribe to our newsLetter to get the latest and exclusive updates.
                  </p>
                </div>
                <form>
                  <div className='formInput'>
                    <input type="email" name='email' placeholder='Email address' autoComplete='off' required className='formControl' />
                    <button type='submit' className='button'>
                      <RiSendPlaneFill style={{ fontSize: "25px"}} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
};

export default MainBody 

   