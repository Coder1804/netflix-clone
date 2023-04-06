import React, {useEffect, useState} from 'react';
import Header from "./Header.jsx";

function Navbar() {
    const [show,setShow] = useState(false);

    const navbarScrollEffect = ()=>{
        if(window.scrollY > 100)
        {
            setShow(true);
        }
        else
        {
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll' , navbarScrollEffect);

        return()=>window.removeEventListener('scroll' , navbarScrollEffect )
    },[])
    return (
            <div className={`${show ? 'bg-black' : 'bg-transparent'} duration-500 fixed top-0 max-w-full z-50`}>
                <Header/>
            </div>
    );
}

export default Navbar;