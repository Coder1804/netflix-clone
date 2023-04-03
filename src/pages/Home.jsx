import React, {useEffect} from 'react';
import PopUp from "../components/PopUp.jsx";
import Features from "../components/Features.jsx";
import Questions from "../components/Questions.jsx";
import Footer from "../components/Footer.jsx";



function Home() {
    useEffect(()=>{
        document.title = 'Netflix in Uzbekistan'
    },[])
    return (
        <div>
            <PopUp/>
            <Features/>
            <Questions/>
            <Footer/>
        </div>
    );
}

export default Home;