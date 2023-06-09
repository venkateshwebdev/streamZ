import {AiOutlineHome,AiOutlineFire} from "react-icons/ai"
import {MdFileDownloadDone,MdOutlineMusicNote,MdPlaylistAddCheck} from "react-icons/md"
import {BsBookmark,BsCameraReels, BsMusicNote} from "react-icons/bs"
import { Link } from "react-router-dom";

const MobileFooter = () => {
    return (
        <div className="footer-container">
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",fontSize:"20px",width:"100%"}}><AiOutlineFire/></div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",fontSize:"16px",width:"100%"}}><BsCameraReels /></div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",fontSize:"20px",width:"100%"}}><Link to="/"><AiOutlineHome/></Link></div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",fontSize:"20px",width:"100%"}}><BsMusicNote/></div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",fontSize:"16px",width:"100%"}}><BsBookmark/></div>
        </div>
    );
}
 
export default MobileFooter;