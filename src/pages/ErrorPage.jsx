import React from 'react';
import Button from "../components/Button.jsx";
import {Link} from "react-router-dom";

function ErrorPage() {
    return (
        <div className="flex bg-black flex-col w-full h-[100vh] gap-6 items-center justify-center text-white">
            <h1 className="text-6xl font-bold">404!</h1>
            <h1 className="text-4xl">Oops! You seem to be lost.</h1>
            <Link to='/'>
                <Button context="Back to Previous"/>
            </Link>
        </div>
    );
}

export default ErrorPage;