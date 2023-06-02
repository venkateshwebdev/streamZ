import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import{AiOutlineSend} from "react-icons/ai"
const Search = () => {
    const [searchEl,setSearchEl] = useState("")
    const [searchResults,SetSearchResults] = useState([])
    // useEffect(()=>{
    //     const timer = setTimeout(getSearchSuggestions,200)
    //     return(()=>{
    //         clearInterval(timer)
    //     })
    // },[searchEl])
    // const getSearchSuggestions = async()=>{
    //     const rawData = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchEl}`)
    //     const data = await rawData.json()
    //     console.log(data)
    //     SetSearchResults(data[1])
    // }
    return (
        <div className="search-container">
            <input type="text" placeholder="Search..." onChange={(e)=>setSearchEl(e.target.value)} value={searchEl}/>
            <div className={`serachresultbox ${searchEl==""&&"hideSearch"}`}>{searchResults?.map((e)=><Link to={`search/${e}`}><p onClick={()=>setSearchEl("")} className="search-ele">{e}</p></Link>)}</div>
            {searchEl===""|searchEl===" "?<button onClick={()=>setSearchEl("")}><AiOutlineSend/></button>:
            <Link to={`/search/${searchEl}`}><button onClick={()=>setSearchEl("")}><AiOutlineSend/></button></Link>}
        </div>
    );
}
 
export default Search;