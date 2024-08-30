import React from 'react';

interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
}

export default function SignInButton({type, children}: ButtonProps) {
    return (
        <button
            type={type}
            className="group
            relative w-full flex justify-center py-2 px-4 border-current border-2 text-sm shadow-2xl
            font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-900 hover:bg-gradient-to-l
            hover:from-blue-600 hover:to-purple-900 focus:outline-none focus:ring-2
            focus:ring-blue-800 transition active:scale-110">
            {children}
        </button>
    );
}
