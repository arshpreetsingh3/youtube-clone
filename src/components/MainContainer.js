import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import { useState } from 'react';
import SearchContainer from './SearchContainer';
import { useSelector } from 'react-redux';



const MainContainer = () => {

  const {isSearch,searchQuery} = useSelector((store) => store.result);
  console.log(isSearch,searchQuery);
  return (
    <div className='col-span-11'>
        <ButtonList/>
      { isSearch ? <SearchContainer q={searchQuery} /> :
        <VideoContainer/> }
         {/* <VideoContainer/> */}
         {/* <VideoContainer /> */}
    </div>
  )
};

export default MainContainer;