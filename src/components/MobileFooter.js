import {AiOutlineHome,AiOutlineFire} from "react-icons/ai"
import {MdFileDownloadDone,MdOutlineMusicNote,MdPlaylistAddCheck} from "react-icons/md"
import {BsBookmark,BsCameraReels} from "react-icons/bs"
import { Link } from "react-router-dom";
const MobileFooter = () => {
    return (
        <div className="footer-container">
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",fontSize:"20px",width:"100%"}}><AiOutlineFire/></div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",fontSize:"16px",width:"100%"}}><BsCameraReels /></div>
                <Link to="/"><div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",fontSize:"20px",width:"100%"}}><AiOutlineHome/></div></Link>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",fontSize:"16px",width:"100%"}}><BsBookmark/></div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",fontSize:"20px",width:"100%"}}><MdPlaylistAddCheck/></div>
        </div>
    );
}
 
export default MobileFooter;