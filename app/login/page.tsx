import React from 'react';
import LoginForm from '@/components/LoginForm';
import {FaUserCircle} from "react-icons/fa";
import SignUpButton from "@/components/ui/SignUpButton";

export const metadata = {
    title: "Login",
    description: "Login to your account",
};

export default function Login() {
    return (
        <>
            <main className="relative flex min-h-screen">
                <div className="relative flex min-h-screen items-center justify-center flex-1">
                    <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-[20vw] h-auto sm:h-[50vh] p-8 space-y-8 bg-white rounded-t-lg
                         sm:rounded-l-lg sm:rounded-t-none drop-shadow-2xl">
                            <div className="flex justify-center">
                                <FaUserCircle className="text-6xl text-black"/>
                            </div>
                            <h2 className="text-2xl font-bold text-center text-black">Login</h2>
                            <LoginForm/>
                        </div>
                        <div className="w-full sm:w-[20vw] h-auto sm:h-[50vh] p-8 space-y-8 bg-gradient-to-br
                        from-blue-200 via-blue-600 to-purple-700 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none
                        drop-shadow-2xl flex flex-col items-center justify-center">
                            <text className="font-extrabold text-5xl text-white">Welcome</text>
                            <text className="text-white text-sm">Don&apos;t have an account?</text>
                            <SignUpButton type="submit">Sign Up</SignUpButton>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}