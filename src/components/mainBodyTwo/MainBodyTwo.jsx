import React from 'react';
import './mainBodyTwo.scss';
import StyleTwo from './../styleTwo/StyleTwo';
import StyleOne from './../styleOne/StyleOne';
import { Finance, Sports } from '../../category';
import { FaRegNewspaper } from 'react-icons/fa';
import { GoMegaphone } from 'react-icons/go';

const MainBodyTwo = () => {
  return (
    <div className='mainBodyTwo'>
      <div className='mainBodyTwoWrapper'>
        <div className='styleOne1'>
            <StyleTwo {...Finance } />
        </div>
            <div className='styleTwo2'>
                <StyleOne {...Sports }/>
            </div>
        <div className='styleThree'>
          <div className='widgets'>
            <div className='widgetTitle'>
              <h2>Featured News</h2>
              <FaRegNewspaper className='icon'/>
            </div>

            <div className='list'>
              <div className='top'>
                <ul>
                  <li>
                    <a className='hotNews'>Hot News</a>
                  </li>
                  <li className='active'>
                    <a className='trendyNews'>Trendy News</a>
                  </li>
                  <li>
                    <a className='mostWatched'>Most Watched</a>
                  </li>
                </ul>
              </div>
              <div className='bottom'>
                <div className='item'>
                  <div className='left'>
                    <img src='assets/laptop.jpg' alt=''/>
                  </div>
                  <div className='right'>
                    <ul className='nav'>
                      <li>Hantu Raya</li>
                      <li>20 Jan 2023</li>
                    </ul>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod</h3>
                  </div>
                </div>
                <div className='item'>
                  <div className='left'>
                    <img src='assets/laptop.jpg' alt=''/>
                  </div>
                  <div className='right'>
                    <ul className='nav'>
                      <li>Hantu Raya</li>
                      <li>20 Jan 2023</li>
                    </ul>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod</h3>
                  </div>
                </div>
                <div className='item'>
                  <div className='left'>
                    <img src='assets/laptop.jpg' alt=''/>
                  </div>
                  <div className='right'>
                    <ul className='nav'>
                      <li>Hantu Raya</li>
                      <li>20 Jan 2023</li>
                    </ul>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod</h3>
                  </div>
                </div>
                <div className='item'>
                  <div className='left'>
                    <img src='assets/laptop.jpg' alt=''/>
                  </div>
                  <div className='right'>
                    <ul className='nav'>
                      <li>Hantu Raya</li>
                      <li>20 Jan 2023</li>
                    </ul>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='widgets'>
            <div className='widgetTitle'>
              <h2 className='h4'>Advertisement</h2>
              <GoMegaphone className="icon" />
            </div>
          
            <div className='adWidget'></div>
              <a>
                <img src='assets/ad-300x250-2.jpg' alt=''/>
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBodyTwo
