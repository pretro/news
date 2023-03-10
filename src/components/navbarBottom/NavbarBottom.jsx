import React, { useState } from 'react';
import "./navbarBottom.scss";
import { MdKeyboardArrowDown, MdNavigateNext, MdVisibility, MdStarBorder, MdFlashOn, MdFavoriteBorder } from 'react-icons/md';
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaSearch } from 'react-icons/fa';
import {HiViewGrid} from "react-icons/hi";

const NavbarBottom = () => {
    const [fix,setFix] = useState(false);
    const [dropdownone, setDropdownone] = useState(false);
    const [dropdowntwo, setDropdowntwo] = useState(false);
    const [dropdownthree, setDropdownthree] = useState(false);

    const handleDropdownone = (e) => {
        setDropdownone(!dropdownone);
        setDropdowntwo(false);
        setDropdownthree(false);
    };

    const handleDropdowntwo = (e) => {
        setDropdowntwo(!dropdowntwo);
        setDropdownone(false);
        setDropdownthree(false);
    };

    const handleDropdownthree = (e) => {
      setDropdownthree(!dropdownthree);
      setDropdownone(false);
      setDropdowntwo(false);
    };

    const handleScroll = (e) => {
      if (window.scrollY >= 200){
        setFix(true);
      }else{
        setFix(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

  return (
  <div className= {fix ? 'navbarBottom fixed' : 'navbarBottom'}>
    <div className='navbarBottomWrapper'>
      <div className='item' onClick={handleDropdownone}>
        <span>Home</span>
        <MdKeyboardArrowDown style={{ fontSize: "20px"}}/>
        {dropdownone && (
            <div className='dropDownMenu1'>
            <span>
                <a>Home Deafult</a>
            </span>
            <span className='active'>
                <a>Home Boxed</a>
            </span>
            <span>
                <a>Home RTL</a>
            </span>

            <span>
                <a>Home RTL Boxed</a>
            </span>
            <span>
                <a>
                    Home Versions
                    <MdNavigateNext style={{ fontSize: "20px"}}/>
                </a>
            </span>
            <span>
                <a>
                    Menu Versions
                    <MdNavigateNext style={{ fontSize: "20px"}}/>
                </a>
            </span>
        </div>
        )}
      </div>

          {/*Beginning dropdowntwo */}
      <div className='item' onClick={handleDropdowntwo}>
        <span>Worlds News</span>
        <MdKeyboardArrowDown style={{ fontSize: "20px"}}/>
          {dropdowntwo &&(
            <div className="dropDownMenu2">
              <div className='dropDownMenu2Wrapper'>
                <div className='left'>
                  <div className='item'>
                    <span>All</span>
                    <MdNavigateNext style={{ fontSize: "20px"}}/>
                  </div>
                  <div className='item'>
                    <span>Latin America</span>
                    <MdNavigateNext className='fa' style={{ fontSize: "20px"}}/>
                  </div>
                  <div className='item'>
                    <span>Africa</span>
                    <MdNavigateNext className='fa' style={{ fontSize: "20px"}}/>
                  </div>
                  <div className='item'>
                    <span>Middle East</span>
                    <MdNavigateNext className='fa' style={{ fontSize: "20px"}}/>
                  </div>
                </div>
                <div className='right'>
                  <div className='rightTop'>
                    <div className='item'>
                      <div className='img'>
                        <a className='thumb'>
                          <img src='assets/gripsholm.jpg' alt='post1'/>
                        </a>
                        <a className='cat'>Beach</a>
                        <a className='icon'>
                          <MdVisibility style={{ fontSize: "20px"}}/>
                        </a>
                      </div>
                      <a className='title'>
                      It is a long established that a reader will be distracted by
                      </a>
                    </div>
                    <div className='item'>
                      <div className='img'>
                        <a className='thumb'>
                          <img src='assets/gripsholm.jpg' alt='post2'/>
                        </a>
                        <a className='cat'>News</a>
                        <a className='icon'>
                          <MdStarBorder style={{ fontSize: "20px"}}/>
                        </a>
                      </div>
                       <a className='title'>
                      It is a long established that a reader will be distracted by
                      </a>
                    </div>
                    <div className='item'>
                      <div className='img'>
                        <a className='thumb'>
                          <img src='assets/gripsholm.jpg' alt='post3'/>
                        </a>
                        <a className='cat'>Ice Hiking</a>
                        <a className='icon'>
                          <MdFlashOn style={{ fontSize: "20px"}}/>
                        </a>
                      </div>
                       <a className='title'>
                      It is a long established that a reader will be distracted by
                      </a>
                    </div>
                    <div className='item'>
                      <div className='img'>
                        <a className='thumb'>
                          <img src='assets/gripsholm.jpg' alt='post4'/>
                        </a>
                        <a className='cat'>Mountain</a>
                        <a className='icon'>
                          <MdFlashOn style={{ fontSize: "20px"}}/>
                        </a>
                      </div>
                       <a className='title'>
                      It is a long established that a reader will be distracted by
                      </a>
                    </div>
                  </div>
                  <div className='rightBottom'>
                    <a className='prev' title='Previous'>
                      <FaLongArrowAltLeft style={{ fontSize: "18px"}}/>
                    </a>
                    <a className='all' title='View All'>
                      <HiViewGrid style={{ fontSize: "18px"}}/>
                    </a>
                    <a className='next' title='Next'>
                      <FaLongArrowAltRight style={{ fontSize: "18px"}}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
            {/*end of  dropdowntwo */}

      <div className='item'>
        <span>National</span>
      </div>
      <div className='item'>
        <span>Financial</span>
      </div>
      <div className='item'>
        <span>Entertainment</span>
      </div>
      <div className='item'>
        <span>LifeStyle</span>
      </div>
      <div className='item'>
        <span>Technology</span>
      </div>
      <div className='item'>
        <span>Travel</span>
        <MdKeyboardArrowDown style={{ fontSize: "20px"}}/>
      </div>
      <div className='item'>
        <span>Sports</span>
      </div>

      {/*Beginning dropdownthree */}
      <div className='item' onClick={handleDropdownthree}>
        <span>Category</span>
        <MdKeyboardArrowDown style={{ fontSize: "20px"}}/>

        {dropdownthree &&(
          <div className="dropDownMenu3">
            <div className='dropDownMenu3Wrapper'>
              <div className='col'>
                <div className='item'>
                <a className='title'>World News</a>
                    <ul className='list'>
                      <li>
                        <a href='#'>US &amp; Canada</a>
                      </li>
                      <li>
                        <a href='#'>Europe</a>
                      </li>
                      <li>
                        <a href='#'>Africa</a>
                      </li>
                      <li>
                        <a href='#'>Asia</a>
                      </li>
                      <li>
                        <a href='#'>Middle East</a>
                      </li>
                      <li>
                        <a href='#'>Asia Pacific</a>
                      </li>
                    </ul>
                </div>
              </div>

              <div className='col'>
                <div className='item'>
                  <a className='title'>Documentation</a>
                  <ul className='list'>
                    <li>
                      <a href='#'>Featured Documentation</a>
                    </li>
                    <li>
                      <a href='#'>People &amp; Power</a>
                    </li>
                    <li>
                      <a href='#'>Rebel Education</a>
                    </li>
                    <li>
                      <a href='#'>Rewind</a>
                    </li>
                    <li>
                      <a href='#'>Fault Lines</a>
                    </li>
                    <li>
                      <a href='#'>News 360 Degree World's</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col'>
                <div className='item'>
                  <a className='title'>Sports</a>
                    <ul className='list'>
                      <li>
                        <a href='#'>Football</a>
                      </li>
                      <li>
                        <a href='#'>Cricket</a>
                      </li>
                      <li>
                        <a href='#'>Hockey</a>
                      </li>
                    </ul>
                </div>
                <div className='col'>
                  <div className='item'>
                    <a className='title'>Movies</a> 
                    <ul className='list'>
                      <li>
                        <a href='#'>Hollywood</a>
                      </li>
                      <li>
                        <a href='#'>Dollywood</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

                <div className='col'>
                <div className='item'>
                  <a className='title'>Business</a>
                  <ul className='list'>
                    <li>
                      <a href='#'>US Business</a>
                    </li>
                    <li>
                      <a href='#'>Middle East Business</a>
                    </li>
                    <li>
                      <a href='#'>Europe Business</a>
                    </li>
                  </ul>
                </div>
                    
                <div className='item'>
                  <a className='title'>Weather</a> 
                  <ul className='list'>
                    <li>
                      <a href='#'>North Pole</a>
                    </li>
                    <li>
                      <a href='#'>South Pole</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col'>
                <div className='item'>
                  <a className='title'>Education</a> 
                  <ul className='list'>
                    <li>
                      <a href='#'>Africa Child Education</a>
                    </li>
                    <li>
                      <a href='#'>Bangladeshi Education</a>
                    </li>
                    <li>
                      <a href='#'>Middle East Education</a>
                    </li>
                  </ul>
                </div>
                <div className='item'>
              <a className='title'>Health</a> 
              <ul className='list'>
                <li>
                  <a href='#'>Africa Poor Child Health</a>
                </li>
                <li>
                  <a href='#'>Fitness and Health</a>
                </li>
              </ul>
            </div>
              </div>


                <div className='col'>
                  <div className='item'>
                    <a className='title'>Humanities</a>
                    <ul className='list'>
                      <li>
                        <a href='#'>Help For Syrian Children</a>
                      </li>
                  
                      <li>
                        <a href='#'>Help For Afgan Children</a>
                      </li>
                      <li>
                        <a href='#'>Help For African Children</a>
                      </li>
                    </ul>
                  </div>
                  <div className='item'>
                    <a className='title'>Animals</a>
                    <ul className='list'>
                      <li>
                        <a href='#'>African Animals</a>
                      </li>
                      <li>
                        <a href='#'>Australian Animals</a>
                      </li>
                    </ul>
                  </div>
                </div> 
              </div>                              
            </div>
          )}
        </div>
      <div className='item'>
        <span>Pages</span>
        <MdKeyboardArrowDown style={{ fontSize: "20px"}}/>
      </div>
      <div className='item'>
        <FaSearch style={{ fontSize: "15px"}}/>
      </div>
    </div>
    </div>
  );
};

export default NavbarBottom;
