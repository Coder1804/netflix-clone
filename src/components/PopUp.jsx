import React from 'react';
import Header from "./Header.jsx";
import GetStarted from "./GetStarted.jsx";

function PopUp() {
    return (
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat object-contain w-full h-[100vh] flex flex-col">
            <Header/>
            <div className="flex-1 flex flex-col items-center justify-center m-auto">
                <div className="text-white text-center flex flex-col">
                    <h1 className='text-5xl font-black mb-4'>Unlimited movies, TV shows, and more.</h1>
                    <p className="text-xl font-normal my-3">Watch anywhere. Cancel anytime.</p>
                </div>
                <GetStarted/>
            </div>
        </div>
    );
}

export default PopUp;