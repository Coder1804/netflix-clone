import React, {useState, useContext, createContext, useEffect} from "react";
import {toggleButtonClasses} from "@mui/material";

const StateContext = createContext();



export const ContextProvider = ({children})=>{
    const [isQuestionActive , setIsQuestionActive] = useState({
        index:null,
        toggle:false
    });


    const handleQuestion = (_index)=>{
        setIsQuestionActive(prevState => ({
            index:_index,
            toggle: prevState.index !== _index && prevState.index !== null ? true : !prevState.toggle
        }))
    }


    return(
        <StateContext.Provider value={{isQuestionActive,setIsQuestionActive,handleQuestion}}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = ()=> useContext(StateContext);