import React from 'react'

const VideoCard = ({info}) => {

    //console.log(info);
    const {snippet,statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    return   (
    <div className="p-2 m-2 w-72 shadow-lg">
        <img className="rounded-lg" alt="thumbnail" src = {thumbnails.medium.url} />
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewCount} Views</li>
        </ul>
    </div>
    );
  
};

 export const AdVideoCard = ({info}) => {
    return (
    <div className="p-1 m-1 border border-gray-500">
        <VideoCard info={info}/>
    </div>
)}
//above is an example of higher order component meaning it takes a component modifies it and returns it back
export default VideoCard;