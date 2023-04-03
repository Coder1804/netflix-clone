import React from 'react';
import Select from "./Select.jsx";
import {footer} from "../constant/index.js";

function Footer() {
    return (
        <footer id="footer" className="bg-black text-[#b3b2b2]">
            <div className="responsive mx-auto py-5">
                <div className="my-3 text-base underline">Questions? Contact us.</div>
                <div className="my-3">
                    <div className="grid">
                        {/*grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 */}
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {
                                footer.map((item,index)=>(
                                    <li key={`footer-${index}`}
                                    className="cursor-pointer underline text-xs"
                                    >
                                        <a href="#footer">{item.link}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="my-3"><Select/></div>
                <p>Netflix Uzbekistan</p>
            </div>
        </footer>
    );
}

export default Footer;