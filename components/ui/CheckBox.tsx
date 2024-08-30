import React from 'react';

interface CheckboxProps {
    id: string;
    name: string;
    label: string;
}

export default function Checkbox({id, name, label}: CheckboxProps) {
    return (
        <div className="flex items-center">
            <input
                id={id}
                name={name}
                type="checkbox"
                className="h-4 w-4 checked:accent-blue-600 border-gray-300 rounded"
            />
            <label htmlFor={id} className="ml-2 block text-sm text-gray-900">
                {label}
            </label>
        </div>
    );
}