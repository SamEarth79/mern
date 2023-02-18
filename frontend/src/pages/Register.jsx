import React, { useEffect } from "react";
import Header from "../components/Header";
import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password1: "",
        password2: "",
    });

    const { name, email, password1, password2 } = formData;

    const Signup = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <Header />
            <div className="flex flex-col p-10 gap-20">
                <h1 className="text-5xl font-semibold text-gray-600">
                    Create an accout
                </h1>
                <form className="flex flex-col w-full mx-auto gap-4 max-w-fit">
                    <input
                        className="border-2 px-4 py-2 rounded-lg"
                        type="text"
                        placeholder="Name"
                        onChange={(e) => {
                            setFormData((prevState) => ({
                                ...prevState,
                                name: e.target.value,
                            }));
                        }}
                    />
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
                    <input
                        className="border-2 px-4 py-2 rounded-lg"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e) => {
                            setFormData((prevState) => ({
                                ...prevState,
                                password2: e.target.value,
                            }));
                        }}
                    />
                    <button
                        className="border-2 px-4 py-2 rounded-lg bg-black text-white"
                        type="submit"
                        onSubmit={Signup}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
