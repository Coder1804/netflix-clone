import React from 'react';
import requests from "../apis/bannerApi.js";
import {titleRow} from "../constant/index.js";
import Row from "./Row.jsx";

function Rows() {
    return (
        <div className="bg-black">
            {titleRow.map((title,index)=>
                (<Row key ={title} title = {title}
                    fetchUrl = {Object.values(requests)[index]}/>))
            }
        </div>
    );
}

export default Rows;