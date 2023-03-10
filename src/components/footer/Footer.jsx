import React from 'react'
import './footer.scss'
import { FaAngleRight, FaExclamation, FaExpandAlt, FaFacebookF, FaGooglePlusG, FaMapMarkedAlt, FaRegEnvelope, FaTwitter, FaYoutube } from 'react-icons/fa'
import { TfiAngleDoubleRight } from 'react-icons/tfi'
import { BsFillMegaphoneFill, BsTelephoneFill } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerTop'>
            <div className='footerTopWrapper'>
                <div class='item'>
                    <div class='title'>
                        <h2 class="h4">About us</h2>
                        <FaExclamation style={{ fontSize: "18px"}} />
                    </div>
                    <div class="about">
                        <div class="content">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna. 
                            </p>
                        </div>
                        <div class="action">
                            <a class="btn-link">
                                Read more
                                <TfiAngleDoubleRight style={{ fontSize: "15px"}} />
                            </a>
                        </div>
                    
                    <ul>
                        <li>
                            <FaMapMarkedAlt style={{ fontSize: "15px"}} className="icon"/>
                            <span>Street Address, USA</span>
                        </li>
                        <li>
                            <FaRegEnvelope style={{ fontSize: "15px"}} className="icon"/>
                            <span>example@example.com</span>
                        </li>
                        <li>
                            <BsTelephoneFill style={{ fontSize: "15px"}} className="icon"/>
                            <span>+123 456 (789)</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='item'>
                <div className='title'>
                    <h2 class="h4">Usefull Info Links</h2>
                    <FaExpandAlt style={{ fontSize: "18px"}} />
                </div>
                <div class="links">
                    <ul class="nav">
                        <li>
                            <a>
                                <FaAngleRight/>
                                Gadgets
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                Shop
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                Term and Conditions
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                Forums
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                Top News of This Week
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                Special Recipes
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class='item'>
                <div class='title'>
                    <h2 class="h4">Advertisements</h2>
                    <BsFillMegaphoneFill style={{ fontSize: "18px" }} />
                </div>
                <div class="links">
                    <ul class="nav">
                        <li>
                            <a>
                                <FaAngleRight/>
                                Post an Add
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                Adds Renew
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                Price of Advertisements
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                Adds Closed
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                Monthly or Yearly
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                Trial Adds                            
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                Add Making
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class='item'>
                <div class='title'>
                    <h2 class="h4">Carreer</h2>
                    <BsFillMegaphoneFill style={{ fontSize: "18px" }} />
                </div>
                <div class="links">
                    <ul class="nav">
                        <li>
                            <a>
                                <FaAngleRight/>
                                Available Post
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                Carreer Details
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                How to Apply?
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                Freelance Job
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                Be a Member
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                Apply Now
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaAngleRight/>
                                Send Your Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        <div className='footerBottom'>
            <div className='footerBottomWrapper'>
                <div className='left'>
                    <p>
                        &copy; 2023 <a>usnews</a>. All Rights reserved
                    </p>
                </div>
                <div className='right'>
                    <ul className='nav1'>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>FAQ</a>
                        </li>
                        <li>
                            <a>Support</a>
                        </li>
                    </ul>

                    <ul className='nav2'>
                        <li>
                            <a>
                                <FaFacebookF style={{ fontSize: "18px"}}/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaTwitter style={{ fontSize: "18px"}}/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaGooglePlusG style={{ fontSize: "18px"}}/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaYoutube style={{ fontSize: "18px"}}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
