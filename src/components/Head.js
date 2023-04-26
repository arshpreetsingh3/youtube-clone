import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useState } from 'react';
import { YOUTUBE_KEYWORD_SEARCH, YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults,showResults} from '../utils/searchSlice';
import SearchContainer from './SearchContainer';

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    //console.log(searchQuery);
    const [suggestions,setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    
    
    // to get the cache data 
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();

    /**
     * 
     * 
     * searchCache- 
     * 
     * {
     * "iphone": ["iphone10"]}
     */

    useEffect(() => {
        //API CALL
        console.log(searchQuery);
       
   
        //make an api call after every key press
        //but if the difference between 2 api calls is less than 200ms 
        //decline the api call
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
            }else{
                getSearchSuggestions()
                showSearchSuggestions()
            }
         
        },200);
        
        return () => {
            clearTimeout(timer);
        };
    },[searchQuery]);

  

 
    /**
     * 
     * DEBOUNCING 
     * 
     * key press - i 
     *   --> render the component 
     *   --> call useEffect();
     *   --> start timer => make api call after 200 ms 
     * 
     *  even before 200ms we press p of the ip
     *  it trigers the reconcilliation process 
     *  things need to clear up 
     *  so the function in return will be called everytime it spawns again
     *  
     *  
     * 
     * key - ip
     *   --> destroy the component ( useEffect return method )
     *   --> rerender the component 
     *   --> useEffect();
     *   --> start new timer => make api call after 200 ms 
     * 
     *   QUES -> same timer or new timer?
     *   Ans - New timer 
     * 
     *  
     * 
     */

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        console.log(json[1]);
        setSuggestions(json[1]);

        //update cache 
        dispatch(cacheResults({
            [searchQuery] : json[1],
        }));
    }


    const showSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_KEYWORD_SEARCH+searchQuery);
        const json = await data.json();
        console.log(json.items);
        dispatch(showResults());
    }

    const showSearchResults =() => {
        console.log("inside search functon")
        return (
            <>
             <SearchContainer q={searchQuery} />
            </>
        )
    }


    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
  return (
    //grid grid-flow-col
    <div className='grid grid-flow-col p-3 m-2 shadow-md'>
        <div className='flex col-span-1'>
            <img 
               onClick={() =>toggleMenuHandler()}
               className="h-8 cursor-pointer"
               alt="Menu"
               src="https://www.citypng.com/public/uploads/preview/hd-black-menu-burger-icon-transparent-background-31634946207uno2yrzogi.png"
            />
            <a href="/">
            <img 
               className="h-8 mx-2"
               alt="youtube-logo"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sEZ_vUnzLmENRnq-uGDFJ2BrqFLkGOkn2Q&usqp=CAU"
            />
            </a>
        </div>
         
        <div className="col-span-10 px-10">
        <div>
            <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" 
                    value={searchQuery}
                    // onClick={<SearchContainer q={searchQuery} />}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur = {() => setShowSuggestions(false)}
            />
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100" onClick={() => showSearchResults()}>🔍</button>
        </div>
        {showSuggestions && 
           (<div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
                {
                    suggestions.map(s => <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {s}</li>)
                } 
            </ul>
           </div>
           )}
        </div>
        <div>
            <img
                className='h-8' 
                 alt="user"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6Sl74lVN6nuq7t0VMUBTmtgm-JyWiKAaZg&usqp=CAU"
             />
        </div>
    </div>
  )
};

export default Head;

