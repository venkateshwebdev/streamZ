import { Link } from "react-router-dom";
import {AiOutlineHome,AiOutlineFire} from "react-icons/ai"
import {MdFileDownloadDone,MdPlaylistAddCheck} from "react-icons/md"
import {BsBookmark} from "react-icons/bs"
import { useContext } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
const Sidebar = () => {
    const {sidebar,changeSidebar} = useContext(SidebarContext)
    console.log(sidebar,changeSidebar)
    return ( <div className={`sidebar-container ${sidebar&&"hideSidebar"}`} >
        <Link><div className="sidebar-Links"><span><AiOutlineHome fontSize={"16px"}/></span><span>Home</span></div></Link>
        <Link><div className="sidebar-Links"><span><AiOutlineFire fontSize={"16px"}/></span><span>Trending</span></div></Link>
        <Link><div className="sidebar-Links"><span><BsBookmark fontSize={"16px"}/></span><span>Saved</span></div></Link>
        <Link><div className="sidebar-Links"><span><MdFileDownloadDone fontSize={"16px"}/></span><span>Downloads</span></div></Link>
        <Link><div className="sidebar-Links"><span><MdPlaylistAddCheck fontSize={"16px"}/></span><span>Watch List</span></div></Link>
        <Link><div className="sidebar-Links"><span><AiOutlineHome fontSize={"16px"}/></span><span>Home</span></div></Link>
        <Link><div className="sidebar-Links"><span><BsBookmark fontSize={"16px"}/></span><span>Saved</span></div></Link>
        <Link><div className="sidebar-Links"><span><MdFileDownloadDone fontSize={"16px"}/></span><span>Downloads</span></div></Link>
        <Link><div className="sidebar-Links"><span><MdPlaylistAddCheck fontSize={"16px"}/></span><span>Watch List</span></div></Link>
    </div> );
}
 
export default Sidebar;