import { useState, useContext } from "react";
import { dataContext } from "../App";
import DataItem from "./dataItem";
import SortSelect from "./dic_sort";
import "./list.css"

const List = ()=>{

    const datas = useContext(dataContext);
    const [optList, setOptList] = useState("All");

    const getSortList = ()=>{

        const sortItem = (item)=>{
            switch(optList){
                case "html":
                    return item.category === "html"
                case "css":
                    return item.category === "css"
                case "javaScript":
                    return item.category === "javaScript"
                case "node":
                    return item.category === "node"
                case "react":
                    return item.category === "react"
                default:
                    return null
            }
        }
        
        const sortList = optList === "All" ? datas : datas.filter((item)=>sortItem(item))

        return sortList
    }

    return(
        <>
            <SortSelect value={optList} onChange={setOptList} />
            {getSortList().map((data)=>
            <DataItem key={data.id} {...data} />)}
        </>
    )
}

export default List;