import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
