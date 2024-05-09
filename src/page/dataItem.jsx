import { useState, useContext } from "react";
import { editContext } from "./../App";
import { getLogo } from "./util";
import './dataItem.css'

const DataItem = ({id, word, content, category})=>{

    const {removeWord, editWord} = useContext(editContext)
    const [update, setUpdate] = useState(true)
    const [editCont, setEditCont] = useState(content)

    function removeBtn(){
        if(window.confirm(`${word}을(를) 삭제하시겠습니까?`)){
            removeWord(id)
        }
    }

    function editBtn(){
        setUpdate(!update)
    }

    function editChange(e){
        setEditCont(e.target.value)
    }

    function cancelBtn(){
        if(window.confirm("수정을 취소하시겠습니까?")){
            setUpdate(!update)
        }
    }

    function saveBtn(){
        editWord(id, editCont)
        editBtn()
    }

    return(
        <>
            <dl key={id}>
                <dt>
                    <span>{category}</span>
                    <img
                        src={getLogo(category)}
                        alt={`${category} 아이콘`}
                        className={`icon_${category}`} />
                    <span>{word}</span>
                </dt>
                <dd>
                {update ?
                    <span>
                        {content}
                    </span>
                    :
                    <div>
                        <textarea name="content" value={editCont} onChange={editChange}></textarea>
                    </div>}

                {update ?
                    <div className="btn">
                        <button onClick={removeBtn}>삭제</button>
                        <button onClick={editBtn}>수정</button>
                    </div>
                    :
                    <div className="btn">
                        <button onClick={cancelBtn}>취소</button>
                        <button onClick={saveBtn}>저장</button>
                    </div>
                }
                </dd>
            </dl>
        </>
    )
}

export default DataItem;