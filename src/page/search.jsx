import {useState, useContext} from "react";
import {editContext} from "../App";
import List from './list';
import './search.css'

const Search = () => {

    const {searchWord} = useContext(editContext);
    const [searchData, setSearchData] = useState("");

    function searchChange(e){
        setSearchData(e.target.value)
    }

    function searchBtn(){
        searchWord(searchData)
    }

    return (
        <>
            <div className='main_wrap'>
                <div className='search_wrap'>
                    <input type="text" value={searchData} onChange={searchChange} placeholder="검색어를 입력해주세요"></input>
                    <button className='search_btn' onClick={searchBtn}></button>
                </div>
                <div className='main_cont'>
                    <List></List>
                </div>
            </div>
        </>
    )
}

export default Search;