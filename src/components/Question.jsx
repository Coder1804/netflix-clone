import React, {useEffect, useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import {useStateContext} from "../context/ContextProvider.jsx";
import parse from 'html-react-parser';

function Question({question,answer,itemIndex}) {
    const {isQuestionActive,setIsQuestionActive , handleQuestion} = useStateContext();

    return (
        <div className="responsive flex flex-col text-lg md:text-2xl font-normal   text-white mx-auto bg-question mb-3 ">
            <div
                onClick={()=> {
                    handleQuestion(itemIndex)
                }}
                className="duration-500 hover:bg-question-hover p-8 flex justify-between items-center  relative h-10 cursor-pointer">
                <h3>{question}</h3>
                <AddIcon
                    className={`duration-500 ${isQuestionActive.index === itemIndex && isQuestionActive.toggle && 'rotate-45'}`}
                />
            </div>
            <div className={`relative border-t border-black overflow-hidden px-8 duration-500 ${isQuestionActive.index === itemIndex && isQuestionActive.toggle ? 'max-h-[75rem] py-8 ' : 'max-h-0'}`}>
                {parse(answer)}
            </div>
        </div>
    );
}

export default Question;