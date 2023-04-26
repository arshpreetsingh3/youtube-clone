import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import { useState } from 'react';
import SearchContainer from './SearchContainer';


const MainContainer = () => {

  return (
    <div className='col-span-11'>
        <ButtonList/>
        <VideoContainer/>
     
    </div>
  )
};

export default MainContainer;