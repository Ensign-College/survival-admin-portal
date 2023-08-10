import React from "react";
interface InputFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

interface TextAreaFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

 const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange, type = "text" }) => (
    <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">{label}:</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
    </div>
);

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, name, value, onChange }) => (
    <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">{label}:</label>
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            className="w-full h-32 px-3 py-2 text-gray-700 border rounded shadow appearance-none resize-y focus:outline-none focus:shadow-outline"
        ></textarea>
    </div>
);

export { InputField, TextAreaField };
