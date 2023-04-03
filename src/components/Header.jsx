import React from 'react';
import logo from '../assets/logo.svg'
import Select from "./Select.jsx";
import Button from "./Button.jsx";
function Header() {
    return (
        <header className="w-full h-20 responsive mx-auto ">
            <nav className="flex w-full h-full justify-end items-center gap-4">
                <div className="w-[90px] h-[25px] lg:w-[150px] lg:h-[40px] mr-auto">
                    <img className="text-white text-n-primary" src={logo} alt="logo"/>
                </div>
                <Select/>
                <div>
                    <Button context="Sign In"/>
                </div>
            </nav>
        </header>
    );
}

export default Header;