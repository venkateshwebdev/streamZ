import { useContext, useEffect, useState } from "react"
import { API_KEY } from "../helper"
import VideoCard from "./VideoCard"
import VideoContainerShimmer from "./VideoContainerShimmer"
import { SidebarContext } from "../Contexts/SidebarContext"
const VideoContainer = () => {
    const [videoData,setVideoData] = useState([])
    const {sidebar,changeSidebar} = useContext(SidebarContext)
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        const rawData = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`)
        const data = await rawData.json()
        // console.log(data.items)
        setVideoData(data.items)
    }
    return !videoData[0]?.id?<VideoContainerShimmer />:( <div className={`video-container ${sidebar&&"noPadVideoContainer"}`}>
        {videoData?.map(el=><VideoCard key={el.id} data={el}/>)}
    </div> );
}
 
export default VideoContainer;