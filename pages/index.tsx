import { createClient } from '@supabase/supabase-js';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { supabase } from '../lib/supabaseClient'
import AuthForm from './AuthFor';


const HomePage = () => {
    const [cards, setCards] = useState([]);
    const [form, setForm] = useState({ title: '', image_logo: '', card_detail_id: 0 });

    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = async () => {
        const { data, error } = await supabase.from('card').select();
        if (error) {
            console.error('Error fetching cards:', error);
        } else {
            setCards(data || []);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newCard = { title: form.title, image_logo: form.image_logo, card_detail_id: form.card_detail_id };
        const { data: [first], error } = await supabase.from('card').insert([newCard]);
        if (error) {
            console.error('Error inserting new card:', error);
        } else {
            setCards([...cards, first]);
        }
    };

    return (
        
        <div className="container p-4 mx-auto">
                <div>
      <h1>Welcome to My Next.js App</h1>
      <AuthForm />
    </div>
            <h1 className="mb-4 text-4xl">Cards</h1>
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">Title:</label>
                    <input type="text" name="title" value={form.title} onChange={handleChange} className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">Image Logo URL:</label>
                    <input type="text" name="image_logo" value={form.image_logo} onChange={handleChange} className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">Card details id:</label>
                    <input type="number" name="image_logo" value={form.card_detail_id} onChange={handleChange} className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                </div>
                <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">Insert New Card</button>
            </form>
            <div className="flex flex-row space-x-4">
            {cards.map((card, index) => (
    <div key={index} className="flex items-center p-4 border rounded shadow-lg" style={{ width: '300px' }}>
        {card.image_logo === "https://example.com/logo.png" ? (
            <div className="flex items-center justify-center w-16 h-16 mr-4 bg-gray-200">
                <span className="text-gray-400">No Image</span>
            </div>
        ) : (
            <img src={card.image_logo} alt={card.title} className="object-cover w-16 h-16 max-w-full max-h-full mr-4"/>
        )}
        <h2 className="flex-shrink-0 text-xl">{card.title}</h2>
    </div>
))}
            </div>
        </div>
    );
};

export default HomePage;
