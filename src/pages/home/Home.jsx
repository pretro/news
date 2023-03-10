import React from 'react'
import AdvertTop from '../../components/advertTop/AdvertTop';
import AudioVideo from '../../components/audioVideo/AudioVideo';
import Hotlinks from '../../components/hotlinks/Hotlinks';
import MainBody from '../../components/mainBody/MainBody';
import MainBodyThree from '../../components/mainBodyThree/MainBodyThree';
import MainBodyTwo from '../../components/mainBodyTwo/MainBodyTwo';
import MainContent from '../../components/mainContent/MainContent';
import NavbarTop from '../../components/navbar/NavbarTop';
import NavbarBottom from '../../components/navbarBottom/NavbarBottom';
import AdvertLarge from '../../components/advertLarge/AdvertLarge';
import MainBodyFour from '../../components/mainBodyFour/MainBodyFour';
import "./home.scss";
import FoodRecipe from '../../components/foodRecipe/FoodRecipe';
import PhotoGal from '../../components/photoGal/PhotoGal';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div className='home'>
        <div className='homeWrapper'>
        <NavbarTop/>
        <AdvertTop/>
        <NavbarBottom/>
        <Hotlinks/>
        <MainContent/>
        <MainBody/>
        <MainBodyTwo/>
        <MainBodyThree/>
        <AudioVideo />
        <AdvertLarge />
        <MainBodyFour/>
        <FoodRecipe/>
        <PhotoGal/>
        <Footer />
        </div>
    </div>
  )
}

export default Home;
