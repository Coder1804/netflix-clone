import React, {useEffect} from 'react';
import PopUp from "../components/PopUp.jsx";
import Features from "../components/Features.jsx";
import Questions from "../components/Questions.jsx";
import Footer from "../components/Footer.jsx";
import {footer} from "../constant/index.js";



function DefaultHome() {
    useEffect(()=>{
        document.title = 'Netflix in Uzbekistan'
    },[])
    return (
        <div>
            <PopUp/>
            <Features/>
            <Questions/>
            <Footer footerLinks={footer}/>
        </div>
    );
}

export default DefaultHome;