import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../helper";
import VideoWatchShimmer from "./VideoWatchShimmer";
import {BsBookmark,BsBookmarkFill} from "react-icons/bs"
import {MdFileDownloadDone} from "react-icons/md"
import {HiDownload} from "react-icons/hi"
import {AiFillHeart,AiOutlineHeart} from "react-icons/ai"
const VideoWatchPage = () => {
    const [videoDetails,setVideoDetails] = useState()
    const [channelDetails,setChannelDetails] = useState()
    const [fullDescriprion,setFullDescription] = useState(false)
    const [save,setSave] = useState(false)
    const [download,setDownload] = useState(false)
    const [love,setLove] = useState(false)
    const id = useParams().id
    // console.log(id)
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        const rawData = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`)
        const data = await rawData.json()
        // console.log(data?.items)
        setVideoDetails(data?.items[0])
    }
    const getSubscribers = async()=>{
        const rawData = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${videoDetails?.snippet?.channelId}&key=${API_KEY}`)
        const data = await rawData.json()
        // console.log("this is channel ",data)
        setChannelDetails(data?.items[0]?.statistics)
    }
    return !videoDetails?<VideoWatchShimmer />:(<div className="videowatch-container">
        <div className="video">
        <iframe width="100%" height={"100%"} src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="videoWatch-content">
        <h2>{videoDetails?.snippet?.title}</h2>
        <div className="videoWatch-channel"><h4>{videoDetails?.snippet?.channelTitle}</h4><span>{channelDetails?.subscriberCount>1000000?(channelDetails?.subscriberCount/1000000).toFixed(2)+"M":(channelDetails?.subscriberCount/10000).toFixed(2)+" K"} Subscribers</span></div>
        <div style={{width:"100%",display:"flex",justifyContent:"space-evenly"}}><div className="option-icons" onClick={()=>setSave(prev=>!prev)}>{save?<BsBookmarkFill color="lightgreen" fontSize={"20px"}/>:<BsBookmark fontSize={"20px"}/>}<span>{save?"Saved":"Save"}</span></div><div className="option-icons" onClick={()=>setDownload(prev=>!prev)}>{download?<MdFileDownloadDone fontSize={"22px"}/>:<HiDownload fontSize={"22px"}/>}<span>{download?"Downloaded":"Download"}</span></div><div className="option-icons" onClick={()=>setLove(prev=>!prev)}>{love?<AiFillHeart fontSize={"22px"} color="red" />:<AiOutlineHeart fontSize={"22px"} />}<span>{love?"Liked":"Like"}</span></div></div>
        <p className="videoWatch-description">{fullDescriprion?videoDetails?.snippet?.description:videoDetails?.snippet?.description.slice(0,600)}{<button style={{backgroundColor:"transparent",border:"none",color:"skyblue",cursor:"pointer"}} onClick={()=>setFullDescription(prev=>!prev)}>{fullDescriprion?"...Close":"...More"}</button>}</p>
        <div className="videoWatch-description" style={{color:"gray"}}>{videoDetails?.snippet?.tags?.slice(0,20).map((e)=><span># {e}</span>)}</div>
        </div>

    </div> );
}
 
export default VideoWatchPage;