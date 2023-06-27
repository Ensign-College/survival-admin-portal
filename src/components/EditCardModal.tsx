// EditCardModal.tsx
import React, { useState, useEffect } from 'react';

const EditCardModal = ({ card, closeEditModal }) => {
    const [form, setForm] = useState({
        title: '',
        image_logo: '',
        card_detail_id: 0,
        card_detail_text: '',
        card_detail_pictures: ''
    });

    useEffect(() => {
        // Prefill the form with card data
        if (card) {
            setForm({
                title: card.title || '',
                image_logo: card.image_logo || '',
                card_detail_id: card.card_detail_id || 0,
                card_detail_text: card.card_detail_text || '',
                card_detail_pictures: card.card_detail_pictures ? card.card_detail_pictures.join(',') : ''
            });
        }
    }, [card]);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to update the card
        // After update, close the modal
        closeEditModal();
    };

    return (
        <div className="edit-modal-background">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <form
                onSubmit={handleSubmit}
                className="p-6 bg-white rounded-lg shadow-xl max-w-lg"
                style={{ width: '90%', maxHeight: '80%', overflowY: 'auto' }}
            >
                {/* Title */}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                        Title:
                    </label>
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
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                        Image Logo URL:
                    </label>
                    <input
                        type="text"
                        name="image_logo"
                        value={form.image_logo}
                        onChange={handleChange}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />
                </div>

                {/* Card Details Text */}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                        Card Details Text:
                    </label>
                    <textarea
                        name="card_detail_text"
                        value={form.card_detail_text}
                        onChange={handleChange}
                        className="w-full h-32 px-3 py-2 text-gray-700 border rounded resize-y shadow appearance-none focus:outline-none focus:shadow-outline"
                    ></textarea>
                </div>

                {/* Card Detail Pictures */}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                        Card Detail Pictures (comma separated URLs):
                    </label>
                    <input
                        type="text"
                        name="card_detail_pictures"
                        value={form.card_detail_pictures}
                        onChange={handleChange}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                >
                    Save Changes
                </button>

                {/* Close button */}
                <button
                    type="button"
                    onClick={closeEditModal}
                    className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
                >
                    Close
                </button>
            </form>
        </div>
    );

};

export default EditCardModal;
