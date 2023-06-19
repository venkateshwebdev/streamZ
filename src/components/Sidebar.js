import { Link } from "react-router-dom";
import {AiOutlineHome,AiOutlineFire} from "react-icons/ai"
import {MdFileDownloadDone,MdOutlineMusicNote,MdPlaylistAddCheck} from "react-icons/md"
import {BsBookmark,BsCameraReels} from "react-icons/bs"
import {GrTape} from "react-icons/gr"
import { useContext } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
const Sidebar = () => {
    const {sidebar,changeSidebar} = useContext(SidebarContext)
    // console.log(sidebar,changeSidebar)
    return ( <div className={`sidebar-container ${sidebar&&"hideSidebar"}`} >
        <div className="sidebar-sub">
        <Link><div className="sidebar-Links"><span><AiOutlineHome fontSize={"18px"}/></span><span>Home</span></div></Link>
        <Link><div className="sidebar-Links"><span><AiOutlineFire fontSize={"18px"}/></span><span>Trending</span></div></Link>
        </div>
        <div className="sidebar-sub">
        <Link><div className="sidebar-Links"><span><MdOutlineMusicNote fontSize={"18px"}/></span><span>Music</span></div></Link>
        <Link><div className="sidebar-Links"><span><BsCameraReels fontSize={"18px"}/></span><span>Shorts</span></div></Link>
        </div>
        <Link><div className="sidebar-Links"><span><BsBookmark fontSize={"18px"}/></span><span>Saved</span></div></Link>
        <Link><div className="sidebar-Links"><span><MdFileDownloadDone fontSize={"18px"}/></span><span>Downloads</span></div></Link>
        <Link><div className="sidebar-Links"><span><MdPlaylistAddCheck fontSize={"18px"}/></span><span>Watch List</span></div></Link>
    </div> );
}
 
export default Sidebar;