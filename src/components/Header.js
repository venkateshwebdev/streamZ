import { Link } from 'react-router-dom';
import icon from './icon.png'
import Search from './Search';
import {RxHamburgerMenu} from "react-icons/rx"
import { useContext } from 'react';
import { SidebarContext } from '../Contexts/SidebarContext';
const Header = () => {
    const cxt = useContext(SidebarContext)
    return ( <div className="header-container">
        <div className='header-content'>
        <div className='hamLogo'>
        <div className='hamburger' onClick={()=>cxt?.changeSidebar(prev=>!prev)}><RxHamburgerMenu fontSize={"25px"}/></div>
        <Link to="/"><div className='header-title'><h2>Stream Z.</h2><div className='header-animation'><span className='v'>| Videos | </span><span className='s'> | Shorts | </span><span className='m'> | Music | </span></div></div></Link>
        </div>
        <div><Search /></div>
        {/* <div className="header-logo"><img src={icon}/></div> */}
        </div>
    </div> );
}
 
export default Header;