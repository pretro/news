import React from 'react';
import './audioVideo.scss';
import HeadingTitle from '../../components/headingTitle/HeadingTitle';

const AudioVideo = () => {
  return (
    <div className='audioVideo'>
      <div className='audioVideoWrapper'>
        <HeadingTitle title= 'Audio &amp; Videos' />
        <div className='body'>
            <div className='videoWrapper'>
                <video width="100%" controls autoplay loop>
                    <source src='/assets/newUpdate.mp4' type='video/mp4' />
                </video>
            </div>
            <div className='listWrapper'>
                <div className='list'>
                    <div className='item'>
                        <div className='left'>
                            <img src='/assets/audio-video-02.jpg'  alt=''/>
                        </div>
                        <div className='right'>
                            <ul className='nav'>
                                <li>Cynthia C</li>
                                <li>16 April 2023</li>
                            </ul>
                            <h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Eum, itaque corporis
                            </h3>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <img src='/assets/audio-video-03.jpg'  alt=''/>
                        </div>
                        <div className='right'>
                            <ul className='nav'>
                                <li>Cynthia C</li>
                                <li>16 April 2023</li>
                            </ul>
                            <h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Eum, itaque corporis
                            </h3>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <img src='/assets/audio-video-02.jpg'  alt=''/>
                        </div>
                        <div className='right'>
                            <ul className='nav'>
                                <li>Cynthia C</li>
                                <li>16 April 2023</li>
                            </ul>
                            <h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Eum, itaque corporis
                            </h3>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <img src='/assets/audio-video-04.jpg'  alt=''/>
                        </div>
                            <div className='right'>
                                <ul className='nav'>
                                    <li>Cynthia C</li>
                                    <li>16 April 2023</li>
                                </ul>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Eum, itaque corporis
                                </h3>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AudioVideo
