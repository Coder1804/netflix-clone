import React from 'react';
import Divider from "./Divider.jsx";
import Feature from "./Feature.jsx";
import {tv, videoTv, device, deviceVideo, kidsImage, phoneGirl, boxShot, downloadIcon} from '../assets/index.js'

function phoneGirlAbove(){
    return(
        <div className="flex left-1/2 -translate-x-1/2 bottom-[10%] justify-between text-white items-center min-w-[15rem] w-1/2 py-[0.5rem] px-[0.75rem] absolute  z-[3] bg-black rounded border-2 border-secondary ">
            <div className="mr-3">
                <img className="w-full max-w-[52px] object-contain" src={boxShot} alt="box shot"/>
            </div>
            <div>
                <h3 className="text-lg">Stranger Things</h3>
                <span className="text-blue-600">Downloading...</span>
            </div>
            <div className="w-full max-w-[48px]">
                <img src={downloadIcon} alt="download icon"/>
            </div>
        </div>
    )
}


function Features() {
    return (
        <div className="bg-black">
            <Divider/>
            <Feature
                styleVideo="top-[21%] left-[13.5%] w-[72%] h-[54%]"
                img={tv}
                video={videoTv}
                title="Enjoy on your TV."
                p="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."/>
            <Divider/>
            <Feature
                ltr={false}
                img={phoneGirl}
                ChildComponent = {phoneGirlAbove}
                title="Download your shows to watch offline."
                p="Save your favorites easily and always have something to watch."/>
            <Divider/>
            <Feature
                styleVideo="top-[11%] left-[19%] w-[62%] h-[50%]"
                img={device}
                video={deviceVideo}
                title="Watch everywhere."
                p="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."/>
            <Divider/>
            <Feature
                ltr={false}
                img={kidsImage}
                title="Create profiles for kids."
                p="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."/>
            <Divider/>
        </div>
    );
}

export default Features;