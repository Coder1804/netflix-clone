import React from 'react';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import {DefaultHome  ,Home} from "./pages/index.js";
import ErrorPage from "./pages/ErrorPage.jsx";
import SignUpScreen from "./pages/SignUpScreen.jsx";

function App() {
    const user = null
    return (
        <Router>
            <Routes>
                {!user ?
                    <Route path='/' element = {<DefaultHome/>}/>
                    :
                    <Route path='/home' element= {<Home/>}/>
                }
                <Route path= '/home/signup' element = {<SignUpScreen/>}/>
                <Route path='*' element = {<ErrorPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;