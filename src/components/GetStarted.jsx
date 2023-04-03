import React, {useRef, useState} from 'react';
import Button from "./Button.jsx";
import {NavigateNext as NavigateNextIcon} from "@mui/icons-material";

function GetStarted(props) {
    const [email,setEmail] = useState();
    const emailInput = useRef(null);

    const handleEmailChange = (e)=>{
        e.preventDefault();
        const {value} = e.target
        setEmail(value);
    }
    return (
        <div className="flex flex-col gap-2 mt-4 ">
            <h3 className="text-center  text-xl font-normal text-white mb-2">
                Ready to watch? Enter your email to create or restart your membership.
            </h3>
           <div className="flex w-full flex-col px-4 gap-2  md:flex-row ">
               <div className="relative flex-1 h-full">
                   <input ref={emailInput} value={email} onChange={handleEmailChange} className=" rounded text-white bg-[#1a1613cc] px-4 pt-6 pb-2 border-secondary border-2 h-full w-full peer " name="email" type="email"/>
                   <label onClick={()=>{emailInput.current.focus()}} className={`text-[#b3b2b2]  text-xl absolute top-1/4  left-4 transition-all duration-500 ' peer-focus:-translate-y-3 peer-focus:text-lg' ${email && '-translate-y-3 text-lg' }`} htmlFor="email">Email address</label>
               </div>
               <Button  className="w-max mx-auto md:ml-2 text-2xl font-medium tracking-normal" context="Get Started" Icon={NavigateNextIcon}/>
           </div>
        </div>
    );
}

export default GetStarted;