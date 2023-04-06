import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {DefaultHome ,Home} from "./pages/index.js";

function App() {
    return (
        <BrowserRouter>
            {/*<DefaultHome/>*/}
            <Home/>
        </BrowserRouter>
    );
}

export default App;