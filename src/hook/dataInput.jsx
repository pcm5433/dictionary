import {useState, useCallback} from "react"

const DataInput = (inputDic)=>{

    const [dic, setDic] = useState(inputDic)
    
    const onchange = useCallback((e)=>{
        const {name, value} = e.target;
        setDic((dic)=>({
            ...dic,
            // name은 key값이기 때문에 대괄호로 감싸는 것
            [name] : value
        }))
    }, [])

    const reset = useCallback(()=>setDic(inputDic),[inputDic])
    
    return[dic, onchange, reset]
}

export default DataInput;