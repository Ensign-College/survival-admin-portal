import { SupabaseClient } from '@supabase/supabase-js';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

interface EditModalProps {
    card: Card | null;
    supabase: SupabaseClient
    onClose: () => void;
    onSubmit: (id: number) => void;
}
const EditModal: React.FC<EditModalProps> = ({ card,supabase, onClose, onSubmit }) => {

    const [cardDetails, setCardDetails] = useState<CardDetails | null>(null);

    useEffect(() => {
        supabase.from('card_details').select().eq('card_id', card?.id).single().then(({ data }) => {
            console.log("cardDetails: ", data);
            setCardDetails(data);
        })
        if (card && cardDetails) {
            card.card_detail_text = cardDetails.text;
        }
    })
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (card) {
            onSubmit(card.id);
        }
        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (card) {
            const { name, value } = e.target;

            if (name in card) {
                (card as any)[name] = value;
            }
        }
    };
      
    return (
        <div className="modal-overlay">
            <div className="bg-white w-full lg:w-2/3 m-8 p-8 rounded-xl">
                <div className="flex flex-row-reverse justify-between mb-4">
                    <button onClick={onClose} className="modal-close-icon text-red-600 hover:bg-red-100 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <h2 className='text-2xl font-semibold'>Edit Card</h2>
                </div>
                {card && (
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
                )}
            </div>
        </div>
    );
};

export default EditModal;
