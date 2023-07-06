import React, { ChangeEvent, FormEvent } from 'react';

interface EditModalProps {
    card: Card;
    onClose: () => void;
    onSubmit: (card: Card) => void;
}

interface Card {
    id: number;
    title: string;
    image_logo: string;
    card_detail_id: number;
    card_detail_text: string;
    card_detail_pictures: string;
}

const EditModal: React.FC<EditModalProps> = ({ card, onClose, onSubmit }) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(card);
        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
      
        if (name in card) {
          (card as any)[name] = value;
        }
      };
      
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-close">
                        <button onClick={onClose} className="modal-close-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <h2>Edit Card</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700">Title:</label>
                            <input
                                type="text"
                                name="title"
                                value={card.title}
                                onChange={handleChange}
                                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700">Image Logo URL:</label>
                            <input
                                type="text"
                                name="image_logo"
                                value={card.image_logo}
                                onChange={handleChange}
                                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700">Card details id:</label>
                            <input
                                type="number"
                                name="card_detail_id"
                                value={card.card_detail_id}
                                onChange={handleChange}
                                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700">
                                Card Details Text:
                            </label>
                            <textarea
                                name="card_detail_text"
                                value={card.card_detail_text}
                                onChange={handleChange}
                                className="w-full h-32 px-3 py-2 text-gray-700 border rounded shadow appearance-none resize-y focus:outline-none focus:shadow-outline"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700">
                                Card Detail Pictures (comma separated URLs):
                            </label>
                            <input
                                type="text"
                                name="card_detail_pictures"
                                value={card.card_detail_pictures}
                                onChange={handleChange}
                                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        >
                            Submit Edited Card
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
