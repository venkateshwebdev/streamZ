import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../helper";
import VideoCard from "./VideoCard";
import { SidebarContext } from "../Contexts/SidebarContext";

const SearchResults = () => {
    const {sidebar} = useContext(SidebarContext)
    const [searchResults,setSearchResults] = useState([])
    const id = useParams().id
    useEffect(()=>{
        getSearchData()
    },[])
    const getSearchData = async()=>{
        const rawData = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${id}&videoCaption=any&key=${API_KEY}`)
        const data = await rawData.json()
        console.log(data)
        setSearchResults(data.items)
    }
    return (
        <div className={`searchResult-container video-container ${sidebar&&"noPadVideoContainer"}`}>
            {searchResults?.map((el)=><VideoCard key={el.id} data={el}/>)}
        </div>

    );
}
 
export default SearchResults;