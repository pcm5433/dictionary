import {createContext, useReducer, useMemo, useCallback, useEffect, useRef} from "react";
import {Routes, Route, Link} from 'react-router-dom';
import {Contents, Reducer} from "./data";
import Header from './page/header';
import Main from './page/main';
import Write from './page/write';
import './App.css';

export const dataContext = createContext();
export const editContext = createContext();

function App() {

  const [state, dispatch] = useReducer(Reducer, Contents);
  const {datas} = state;
  const {word, content, category} = state.inputs;
  const userId = useRef(5);

  const createWord = useCallback((word, content, category)=>{
    const createDate = new Date().toLocaleDateString();

    dispatch({
      type: "create",
      data: {
        word, content, category,
        id: userId.current,
        createDate
      }
    })
    userId.current += 1;
  }, [word, content, category])

  const editWord = (id, content)=>{
    dispatch({
      type: "edit",
      id, content
    })
  }

  const removeWord = (id)=>{
    dispatch({
      type: "remove",
      id
    })
  }

  const searchWord = (text)=>{
    dispatch({
      type: "search",
      text
    })
  }

  const memoWord = useMemo(()=>{
    return{createWord, editWord, removeWord, searchWord}
  }, [])

  return (
    <div className="App">
      <dataContext.Provider value={datas}>
        <editContext.Provider value={memoWord}>
          <div className="posi">
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/write" element={<Write />} />
            </Routes>
          </div>
        </editContext.Provider>
      </dataContext.Provider>
    </div>
  );
}

export default App;