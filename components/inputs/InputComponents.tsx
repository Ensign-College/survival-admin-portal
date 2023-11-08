import React, {useMemo} from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
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
        <label className="block mb-2 text-sm font-bold text-gray-700">{label}: </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
    </div>
);

// @ts-ignore
const MarkDownEditorTitleField = ({ label, value, handleQuillChange}) =>{

    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);

    const TOOLBAR_OPTIONS = [
        ["bold", "italic", "underline", "strike", "blockquote", "link"],
    ];

    const handleQuillChangeInternal = (newValue: any) => {
        const eventTest = {
            target: {
                name: label.toLowerCase(),  // Use the label as the name of the target
                value: newValue,
            },
        };
        handleQuillChange(eventTest);
    };
    return (
        <>
            <label className="block mb-2 text-sm font-bold text-gray-700">{label}:</label>
            <ReactQuill
                className="w-full leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                theme="snow"
                value={value}
                onChange={handleQuillChangeInternal}
                modules={{
                    toolbar: {
                        container: TOOLBAR_OPTIONS
                    }
                }}
            />
        </>
    )
}

// @ts-ignore
const MarkDownEditorField = ({ label, value, handleQuillChange}) =>{

    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);

    const TOOLBAR_OPTIONS = [
        ["bold", "italic", "underline", "strike", "blockquote", "link"],
    ];

    return (
        <>
            <label className="block mb-2 text-sm font-bold text-gray-700">{label}:</label>
            <ReactQuill
                className="w-full leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                theme="snow"
                value={value}
                onChange={handleQuillChange}
                modules={{
                    toolbar: {
                        container: TOOLBAR_OPTIONS
                    }
                }}
            />
        </>
    )
}



const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, name, value, onChange }) => {
    return (<div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">{label}:</label>
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            className="w-full h-32 px-3 py-2 text-gray-700 border rounded shadow appearance-none resize-y focus:outline-none focus:shadow-outline"
        ></textarea>
    </div>)
}

export { InputField, TextAreaField, MarkDownEditorTitleField, MarkDownEditorField};
