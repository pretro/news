import React from 'react'
import { MdFlashOn } from 'react-icons/md';
import './mainContent.scss';

const MainContent = () => {
  return (
    <div className='mainContent'>
        <div className='col'>
            <div className='row'>
                <img src='assets/gripsholm.jpg' alt=''/>
                <a className='cat'>Politics</a>
                <a className='icon'>
                    {" "}
                    <MdFlashOn style={{ fontSize: "20px "}}/>
                </a>
                <div className='postInfo'>
                    <ul className='nav'>
                        <li> Molly Nagle </li>
                        <li> 10 January 2023 </li>
                    </ul>
                    <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        sed do eiusmod tempor.
                    </h3>
                </div>
            </div>
        </div>
        <div className='col'>
            <div className='row'>
                <div className='col'>
                    <div className='row'>
                        <img src='assets/gripsholm.jpg' alt='foto3'/>
                        <a className='cat'>Travel</a> 
                        <a className='icon'>
                            <MdFlashOn style={{fontSize: "20px"}}/>
                        </a>

                        <div className='postInfo'>
                            <ul className='nav'>
                                <li>Molly Nagle</li>
                                <li>10 January 2023</li>
                            </ul>
                            <h3>Lorem ipsum dolor sit.</h3>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='row'>
                        <img src='assets/gripsholm.jpg' alt='fofo4'/>
                        <a className='cat'>Education</a> 
                        <a className='icon'>
                            <MdFlashOn style={{fontSize: "20px"}}/>
                        </a>

                        <div className='postInfo'>
                        <ul className='nav'>
                            <li>Molly Nagle</li>
                            <li>10 January 2023</li>
                        </ul>
                        <h3>Lorem ipsum dolor sit.</h3>
                    </div>      
                </div>
            </div>
        </div>
            <div className='row'>
                <img src='assets/gripsholm.jpg' alt='fofo4'/>
                <a className='cat'>Election</a> 
                <a className='icon'>
                    <MdFlashOn style={{fontSize: "20px"}}/>
                </a>

            <div className='postInfo'>
                <ul className='nav'>
                    <li>Molly Nagle</li>
                    <li>10 January 2023</li>
                </ul>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
                do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua.
                </h3>
            </div>
        </div>
    </div>
</div>
  );
}

export default MainContent;

    