const sortList = [
    {value: "All", name: "전체"},
    {value: "html", name: "html"},
    {value: "css", name: "css"},
    {value: "javaScript", name: "javaScript"},
    {value: "node", name: "node"},
    {value: "react", name: "react"}
]

const sortSelect = ({value, onChange})=>{

    function optChange(e){
        onChange(e.target.value)
    }

    return(
        <select key={value} value={value} onChange={optChange}>
            {sortList.map((sort)=>
                <option key={sort.value} value={sort.value}>{sort.name}</option>
            )}
        </select>
    )
}

export default sortSelect;