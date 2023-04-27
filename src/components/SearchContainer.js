import React, { useEffect, useState } from 'react';
import { YOUTUBE_KEYWORD_SEARCH } from '../utils/constants';
import VideoCard,{AdVideoCard}from './VideoCard';
import { Link } from 'react-router-dom';



const SearchContainer = ({q}) => {
    const [videos, setVideos] = useState([]);
    //updating the state so that reconciliation is triggered
    
    useEffect(() => {
        getVideos();
    },[]);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_KEYWORD_SEARCH+q);
        const json = await data.json();
        //console.log(json.items);
        setVideos(json.items);
      }

  return (
    <>
    <h1>Search Container</h1>
    <div className='flex flex-wrap'>
        {videos?.[0] && <AdVideoCard info={videos?.[0]} /> }
         {videos?.map((video) => (
            <Link key={video?.id}  to={"/watch?v=" + video.id}>  
              <VideoCard info={video} />
               </Link>
           
       ))}
    </div>
    </>
  )
};




export default SearchContainer;