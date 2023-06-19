import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import{AiOutlineSend} from "react-icons/ai"
const Search = () => {
    const [searchEl,setSearchEl] = useState("")
    const [searchResults,SetSearchResults] = useState([])
    const [cors,setCors] = useState(false)
    useEffect(()=>{
        const timer = setTimeout(getSearchSuggestions,200)
        return(()=>{
            clearInterval(timer)
        })
    },[searchEl])
    const getSearchSuggestions = async()=>{
        try{
            const rawData = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchEl}`)
            const data = await rawData.json()
            // console.log(data)
            SetSearchResults(data[1])
        }
        catch{
            console.log("error occured")
            setCors(true)
        }

    }
    return (
        <div className="search-container">
            <form onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder="Search..." onChange={(e)=>setSearchEl(e.target.value)} value={searchEl}/>
            {setCors&&<div className={`serachresultbox ${searchEl==""&&"hideSearch"}`}>{searchResults?.map((e)=><a href={`/search/${e}`}><p onClick={()=>setSearchEl("")} className="search-ele">{e}</p></a>)}</div>}
            {searchEl===""|searchEl===" "?<button onClick={()=>setSearchEl("")}><AiOutlineSend/></button>:
            <a href={`/search/${searchEl}`}><button onClick={()=>setSearchEl("")}><AiOutlineSend/></button></a>}
            </form>
        </div>
    );
}
 
export default Search;