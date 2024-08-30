import React from 'react';

interface InputProps {
    id: string;
    name: string;
    type: string;
    autoComplete: string;
    required: boolean;
    placeholder: string;
}

export default function Input({id, name, type, autoComplete, required, placeholder}: InputProps) {
    return (
        <div>
            <label htmlFor={id} className="sr-only">{placeholder}</label>
            <input
                id={id}
                name={name}
                type={type}
                autoComplete={autoComplete}
                required={required}
                className="appearance-none bg-gray-50 rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-grey-200 text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder={placeholder}
            />
        </div>
    );
}