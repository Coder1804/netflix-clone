import React from 'react';
import Question from "./Question.jsx";
import {questions} from '../constant/index.js'
import {styles} from "../styles.js";
import GetStarted from "./GetStarted.jsx";
import Divider from "./Divider.jsx";
function Questions() {

    return (
        <div className="bg-black  py-[4.5rem]">
            <h2 className={`${styles.textSubHeadTitle} text-center mb-5`}>Frequently Asked Questions</h2>
            {
                questions.map((question,index)=>(
                    <Question key={`question-${index}`} question={question.question} answer={question.answer} itemIndex = {index}/>
                ))
            }
            <div className="responsive w-[630px!important] mx-auto text-center w-max my-10">
                <GetStarted/>
            </div>
            <Divider/>
        </div>
    );
}

export default Questions;