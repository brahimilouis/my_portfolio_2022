import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/Porfolio.scss"
import "./styles/reset.scss"
import Main from "./components/main/main";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <div className="App">
            <Main/>
        </div>
    </React.StrictMode>
);