import React, { useEffect } from "react";
import Header from "../components/Header";
import { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const Login = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <Header />
            <div className="flex flex-col p-10 gap-20">
                <h1 className="text-5xl font-semibold text-gray-600">Login</h1>
                <form className="flex flex-col w-full mx-auto gap-4 max-w-fit">
                    <input
                        className="border-2 px-4 py-2 rounded-lg"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => {
                            setFormData((prevState) => ({
                                ...prevState,
                                email: e.target.value,
                            }));
                        }}
                    />
                    <input
                        className="border-2 px-4 py-2 rounded-lg"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {
                            setFormData((prevState) => ({
                                ...prevState,
                                password1: e.target.value,
                            }));
                        }}
                    />
                    <button
                        className="border-2 px-4 py-2 rounded-lg bg-black text-white"
                        type="submit"
                        onSubmit={Login}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
