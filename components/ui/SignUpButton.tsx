"use client"
import React from 'react';
import {useRouter} from "next/navigation";

interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
}

export default function SignUpButton({type, children}: ButtonProps) {

    const handleClick = () => {
        if (type === 'submit') {
            console.log("form submitted");
        }
    };
    return (
        <button
            type={type}
            onClick={handleClick}
            className="group relative w-full sm:w-1/4 flex justify-center py-2 px-4 border border-white text-xs
            font-medium rounded-full text-white bg-transparent hover:bg-white hover:text-black focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition active:scale-110">
            {children}
        </button>
    );
}