import { Link } from "react-router-dom";
const VideoCard = (props) => {
{/* <Link to={`/watch/${props.data?.id}`}></Link> */}
    return (<Link to={`/watch/${props.data?.id.videoId?props.data?.id.videoId:props.data?.id}`}><div className="video-card-container">
        <img src={props.data?.snippet?.thumbnails?.maxres?props.data?.snippet?.thumbnails?.maxres?.url:props.data?.snippet?.thumbnails?.medium?.url}/>
        <div className="videocard-content">
            <h5>{props.data?.snippet?.title.slice(0,70)}</h5>
            <h5 style={{color:"lightgray"}}>| {props.data?.snippet?.channelTitle} |</h5>
            <p style={{fontSize:'12px',color:"gray"}}>{props.data?.statistics?.viewCount>1000000?(props.data?.statistics?.viewCount/1000000).toFixed(2) + " M views":(props.data?.statistics?.viewCount/1000).toFixed(0) + " K views"}</p>
        </div>
    </div></Link> );
}
 
export default VideoCard;