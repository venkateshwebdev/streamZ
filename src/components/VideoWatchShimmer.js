const VideoWatchShimmer = () => {
    return (<div style={{display:"flex",margin:"3%",gap:"30px",width:"100vw",marginTop:"130px"}}>
        <div className="video" style={{backgroundColor:"#44495624",width:"90%",height:"530px"}}></div>
        <div className="videoWatch-content">
        <div style={{display:"flex",flexDirection:"column",gap:"15px"}}>
            <div style={{backgroundColor:"#44495624",height:'40px',borderRadius:"15px"}}></div>
            <div style={{backgroundColor:"#44495624",height:'40px',borderRadius:"15px",width:"60%"}}></div>
            </div>
            <div style={{backgroundColor:"#44495624",height:'24px',width:"40%",borderRadius:"7px"}}></div>
            <div style={{display:"flex",flexDirection:"column",gap:"15px",paddingTop:"60px"}}>
            <div style={{backgroundColor:"#44495624",height:'16px',borderRadius:"5px"}}></div>
            <div style={{backgroundColor:"#44495624",height:'16px',borderRadius:"5px"}}></div>
            <div style={{backgroundColor:"#44495624",height:'16px',borderRadius:"5px"}}></div>
            <div style={{backgroundColor:"#44495624",height:'16px',borderRadius:"5px"}}></div>
            <div style={{backgroundColor:"#44495624",height:'16px',borderRadius:"5px"}}></div>
            <div style={{backgroundColor:"#44495624",height:'16px',width:"40%",borderRadius:"5px"}}></div>
            </div>
        </div>
    </div>);
}
 
export default VideoWatchShimmer;