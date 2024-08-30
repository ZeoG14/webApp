import React from 'react';
import SignUpForm from '@/components/SignUpForm';
import {FaUserCircle} from "react-icons/fa";
import LoginButton from "@/components/ui/LoginButton";

export const metadata = {
    title: "Sign Up",
    description: "Create a new account",
};

export default function SignUp() {
    return (
        <>
            <main className="relative flex min-h-screen">
                <div className="relative flex min-h-screen items-center justify-center flex-1">
                    <div className="flex flex-col sm:flex-row">
                        <div
                            className="w-full sm:w-[20vw] h-auto sm:h-[50vh] p-8 space-y-8 bg-white rounded-t-lg sm:rounded-l-lg sm:rounded-t-none drop-shadow-2xl">
                            <div className="flex justify-center">
                                <FaUserCircle className="text-6xl text-black"/>
                            </div>
                            <h2 className="text-2xl font-bold text-center text-black">Sign Up</h2>
                            <SignUpForm/>
                        </div>
                        <div
                            className="w-full sm:w-[20vw] h-auto sm:h-[50vh] p-8 space-y-8 bg-gradient-to-br from-blue-200 via-blue-600 to-purple-700 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none drop-shadow-2xl flex flex-col items-center justify-center">
                            <text className="font-extrabold text-5xl text-white">Welcome</text>
                            <text className="text-white text-sm">Already have an account?</text>
                            <LoginButton type="submit">Login</LoginButton>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}