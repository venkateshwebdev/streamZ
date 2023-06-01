const VideoContainerShimmer = () => {
    console.log("rendered")
    return (
        <div className="shimmer-container">
            {[...Array(20)].map((e,i)=><div className="Shimmer-card">
                <div className="Shimmer-cardint" style={{height:"200px"}}></div>
                <div className="Shimmer-cardint t" style={{height:"30px",width:"75%"}}></div>
                <div className="Shimmer-cardint t" style={{height:"20px",width:"50%"}}></div>
            </div>)}
        </div>
    );
}
 
export default VideoContainerShimmer;