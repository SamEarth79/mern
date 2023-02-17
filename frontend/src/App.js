import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <h1 className="text-5xl p-10 m-4 italic font-mono">
                        Sitcoms for all!
                    </h1>
                </div>
            </Router>
        </>
    );
}

export default App;
