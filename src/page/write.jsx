import { editContext } from '../App';
import DataInput from "../hook/dataInput";
import { useContext } from 'react';
import './write.css'

const Write = ()=>{

    const [{word, content, category}, onchange, reset] = DataInput({
        word: "",
        content: "",
        category: ""
    })

    const {createWord} = useContext(editContext);

    const createBtn = ()=>{
        let cate;
        if(category === undefined || category === null || category === ""){
            cate = "html"
        }else{
            cate = category
        }
        createWord(word, content, cate)
        reset()
    }

    return(
        <div id="write_wrap">
            <h2>사전 등록</h2>
            <div>
                <label>분류</label>
                <select name="category" value={category} onChange={onchange}>
                    <option value={"html"}>html</option>
                    <option value={"css"}>css</option>
                    <option value={"javaScript"}>javaScript</option>
                    <option value={"node"}>node</option>
                    <option value={"react"}>jreact</option>
                </select>
            </div>
            <div>
                <label>단어</label>
                <input type="text" name="word" value={word} onChange={onchange} placeholder='단어를 입력하세요' />
            </div>
            <div>
                <label>설명</label>
                <textarea name="content" value={content} onChange={onchange} placeholder='내용을 입력하세요'></textarea>
            </div>
            <div>
                <button onClick={createBtn}>저장</button>
            </div>
        </div>
    )
}
export default Write;