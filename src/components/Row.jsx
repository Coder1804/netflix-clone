import React, {useEffect, useState} from 'react';
import bannerInstanceApi from "../apis/bannerInstanceApi.js";

function Row({title,fetchUrl , isLargeRow = false}) {
    const [movies,setMovies] = useState([])
    const baseUrl = "https://image.tmdb.org/t/p/original";
    useEffect(()=>{
        async function fetchMovies()
        {
          const res = await bannerInstanceApi.get(fetchUrl);
          if(res.data.results)
          {
              setMovies(res.data.results);
          }
        }

        fetchMovies().catch(err=>console.log("error",err));
    },[fetchUrl])
    return (
        <div className="text-white p-5">
            <h1>{title}</h1>
            <div className="flex overflow-x-auto overflow-y-hidden p-2">
                    {
                        movies.map((movie,index)=>
                            ((isLargeRow && movie.poster_path) ||
                                (!isLargeRow && movie.backdrop_path)) && (
                                <img
                                    key={movie.id}
                                    className={`${isLargeRow ? 'max-h-[250px] hover:scale-[1.1]' : 'max-h-[100px] hover:scale-[1.09]'} object-contain mr-4 duration-[450ms]  cursor-pointer`}
                                    loading="lazy"
                                    alt={movie.name}
                                    src={`${baseUrl}${isLargeRow ? movie.poster_path:movie.backdrop_path}`}
                                />
                            )
                        )
                    }
                </div>
        </div>
    );
}

export default Row;