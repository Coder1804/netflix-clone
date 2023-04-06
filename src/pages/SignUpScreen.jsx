import React from 'react';
import Header from "../components/Header.jsx";
import GetStarted from "../components/GetStarted.jsx";
import Footer from "../components/Footer.jsx";
import {footerNotHome} from "../constant/index.js";
import {FormControl, InputLabel, TextField, Input, FormHelperText} from "@mui/material";
import Button from "../components/Button.jsx";

function SignUpScreen() {
    return (
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat object-contain w-full h-[160vh] flex flex-col">
            <Header/>
            <div className="flex-1 flex flex-col items-center justify-center m-auto">
                <form style={{
                    marginBottom: "90px",
                    padding: "60px 68px 40px"
                }} className="bg-[rgba(0,0,0,.75);] text-white min-h-[660px] w-[450px]">
                    <h1>Sign In</h1>
                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="email">Email</label>
                        <input
                               className="rounded outline-none h-12 bg-input p-4 border-b-2 border-[#e87c03]"
                               type="email"
                               name='email'/>
                        <label
                            className="text-[#e87c03]"
                            htmlFor="email">Enter valid Email</label>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="email">Password</label>
                        <input
                            className="rounded outline-none h-12 bg-input p-4 border-b-2 border-[#e87c03]"
                            type="password"
                            name='password'/>
                        <label
                            className="text-[#e87c03]"
                            htmlFor="password">Enter valid password</label>
                    </div>
                    <Button context="Sign In" type="submit"/>
                    <div>
                        <input type="checkbox"/>
                        <span>Remember Me</span>
                        <span>Need help?</span>
                    </div>

                    <div>
                        <span>New to Netflix?<strong>Sign up now</strong></span>
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <strong>Learn more.</strong></p>
                    </div>
                </form>
            </div>
            <Footer
                footerBg={false}
                footerLinks={footerNotHome}
            />
        </div>
    );
}

export default SignUpScreen;