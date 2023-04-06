import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Banner from "../components/Banner.jsx";
import Rows from "../components/Rows.jsx";

function Home() {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Rows/>
        </div>
    );
}

export default Home;