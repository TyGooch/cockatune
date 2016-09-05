import React from 'react';
import AudioPlayer from '../audio_player/audio_player_container';

const Footer = () => (
  <div className='footer-container'>
    <div className = 'footer-current-song'>
      
    </div>
    <div className = 'footer-audio-player'>
      <AudioPlayer />
    </div>
    <ul className='footer-list'>
      <a href='/#/explore'>
        <img
          src='http://res.cloudinary.com/dtatkxxcm/image/upload/c_scale,h_35/v1472685482/cockatuneCockatooPNG_zz1mmg.png'
          className='footer-logo'/>
      </a>
    </ul>
  </div>
);

export default Footer;
