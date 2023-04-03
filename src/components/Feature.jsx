import React from 'react';
import {styles} from "../styles.js";

function Feature({ltr = true , title = "not title" , p = "no context",img= null, video = null,styleVideo = null , ChildComponent = null}) {
    return (
        <div className={`flex  flex-col ${ltr ? 'md:flex-row' : 'md:flex-row-reverse'}   responsive items-center mx-auto  py-[4.5rem]`}>
            <div className="text-center md:text-start">
                <h1 className={`${styles.textSubHeadTitle}`}>
                    {title}
                </h1>
                <p className={`${styles.textSubHeadContext}`}>
                    {p}
                </p>
            </div>
                <div  className="relative w-full">
                    {img &&

                                <>
                                    <img className="w-full h-full object-contain relative w-full z-[2]" src={img} alt="feature-img" />
                                    {ChildComponent && <ChildComponent/>}
                                </>
                            }

                    {video &&
                        <video
                            key={`video-key-${title}`}
                            className={`absolute  z-[1] ${styleVideo !== null && styleVideo}`}
                            loop
                            autoPlay >
                        <source src={video} type="video/mp4" />
                    </video>}
                </div>
        </div>
    );
}

export default Feature;