import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import{AiOutlineSend} from "react-icons/ai"
const Search = () => {
    const [searchEl,setSearchEl] = useState("")
    const [searchResults,SetSearchResults] = useState([])
    useEffect(()=>{
        const timer = setTimeout(getSearchSuggestions,200)
        return(()=>{
            clearInterval(timer)
        })
    },[searchEl])
    const getSearchSuggestions = async()=>{
        const rawData = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchEl}`)
        const data = await rawData.json()
        console.log(data)
        SetSearchResults(data[1])
    }
    return (
        <div className="search-container">
            <input type="text" placeholder="Search..." onChange={(e)=>setSearchEl(e.target.value)}/>
            <div style={{position:"relative",color:"white",backgroundColor:'red',padding:"0% 2%"}}>{searchResults?.map((e)=><p>{e}</p>)}</div>
            {searchEl===""|searchEl===" "?<button><AiOutlineSend/></button>:
            <Link to={`/search/${searchEl}`}><button><AiOutlineSend/></button></Link>}
        </div>
    );
}
 
export default Search;