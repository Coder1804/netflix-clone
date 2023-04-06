import React, {useEffect, useState} from 'react';
import bannerInstanceApi from "../apis/bannerInstanceApi.js";
import requests from "../apis/bannerApi.js";

function Banner() {
    const [movie,setMovie] = useState([]);
    const takeStringRange = (text,to)=>{
        return text?.length > to ? text.substr(0,to-1)+ '...'
            : text
    }

    useEffect(()=>{
        async function fetchData()
        {
            const req = await bannerInstanceApi.get(requests.fetchNetflixOriginals);
            setMovie(req?.data?.results[
                Math.floor(Math.random() * req?.data?.results.length - 1)
                ])
        }
        fetchData().catch(err=>console.log('err',err));
    },[])
    return (
        <div style={{
            backgroundImage:movie?.backdrop_path && `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
        }} className="relative text-white bg-bannerImage h-[448px] bg-cover bg-no-repeat">
            <div className='ml-8 pt-36 h-48'>
                <h1 className="text-5xl font-extrabold pb-1.5">{
                    movie?.title || movie?.name || movie?.original_name
                }</h1>
                <div>
                    <button type="button" className="banner-button">Play</button>
                    <button type="button" className="banner-button">My List</button>
                </div>
                <div className="max-w-[360px] w-[45rem] leading-5 text-sm h-20">
                    {takeStringRange(
                        movie?.overview
                        ,150)}
                </div>
            </div>
            <div className='banner-fade-bottom' />
        </div>
    );
}

export default Banner;