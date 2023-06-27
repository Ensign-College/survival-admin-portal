import React, { useState, ChangeEvent, FormEvent } from 'react';

interface CardFormProps {
    onSubmit: (formData: {
        title: string,
        image_logo: string,
        card_detail_id: number,
        card_detail_text: string,
        card_detail_pictures: string[]
    }) => void;
}

const CardForm: React.FC<CardFormProps> = ({ onSubmit }) => {
    const [form, setForm] = useState({
        title: '',
        image_logo: '',
        card_detail_id: 0,
        card_detail_text: '',
        card_detail_pictures: ''
    });
    const [isCardDetailsTextOpen, setIsCardDetailsTextOpen] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {
            ...form,
            card_detail_pictures: form.card_detail_pictures.split(',')
        };
        onSubmit(formData);
    };

    const toggleCardDetailsText = () => {
        setIsCardDetailsTextOpen(!isCardDetailsTextOpen);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            {/* Title */}
            <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">Title:</label>
                <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
            </div>

            {/* Image Logo URL */}
            <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">Image Logo URL:</label>
                <input
                    type="text"
                    name="image_logo"
                    value={form.image_logo}
                    onChange={handleChange}
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
            </div>

            {/* Card details id */}
            <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">Card details id:</label>
                <input
                    type="number"
                    name="card_detail_id"
                    value={form.card_detail_id}
                    onChange={handleChange}
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
            </div>

            {/* Add Card Details Text */}
            <div className="mb-4">
                <button onClick={toggleCardDetailsText} className="text-blue-500 hover:underline">
                    {isCardDetailsTextOpen ? 'Collapse' : 'Add Card Details Text'}
                </button>
                {isCardDetailsTextOpen && (
                    <div className="mt-2">
                        <label className="block mb-2 text-sm font-bold text-gray-700">Card Details Text:</label>
                        <textarea
                            name="card_detail_text"
                            value={form.card_detail_text}
                            onChange={handleChange}
                            className="w-full h-32 px-3 py-2 text-gray-700 border rounded resize-y shadow appearance-none focus:outline-none focus:shadow-outline"
                        ></textarea>
                    </div>
                )}
            </div>

            {/* Card Detail Pictures */}
            <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">Card Detail Pictures (comma separated URLs):</label>
                <input
                    type="text"
                    name="card_detail_pictures"
                    value={form.card_detail_pictures}
                    onChange={handleChange}
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
                Insert New Card
            </button>
        </form>
    );
};

export default CardForm;
