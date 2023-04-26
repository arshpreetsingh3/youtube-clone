import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    //Early return 
    //is isMenuOpen is false it won't go down to the other code
    if(!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
        <ul>
            <li className='p-1'>Home </li>
            <li className='p-1'>Shorts </li>
            <li className='p-1'>Videos </li>
            <li className='p-1'>Live </li>
        </ul>
        <h1 className='p-1 font-bold pt-5'>Watch Later</h1>
        <ul>
            <li className='p-1'>Music </li>
            <li className='p-1'>Sports </li>
            <li className='p-1'>Gaming </li>
            <li className='p-1'>Music </li>

        </ul>
        <h1 className='p-1 font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li className='p-1'>Music </li>
            <li className='p-1'>Sports </li>
            <li className='p-1'>Gaming </li>
            <li className='p-1'>Music </li>
        </ul>
        <h1 className='p-1 font-bold pt-5'>Explore</h1>
        <ul>
            <li className='p-1'>Music </li>
            <li className='p-1'>Movies & Shows </li>
            <li className='p-1'>Trending </li>
            <li className='p-1'>Live </li>
            <li className='p-1'>Gaming</li>
            <li className='p-1'>Sports </li>
            <li className='p-1'>Gaming </li>
            <li className='p-1'>Music </li>
        </ul>
    </div>
  )
};

export default Sidebar;