import {createClient} from '@supabase/supabase-js';
import {useState, useEffect, ChangeEvent, FormEvent} from 'react';
import EditModal from "./EditModal";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_API_KEY = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

const supabase = createClient(SUPABASE_URL as string, SUPABASE_API_KEY as string);


const HomePage = () => {
    const [cards, setCards] = useState([]);
    const [form, setForm] = useState({
        title: '',
        image_logo: '',
        card_detail_id: 0,
        card_detail_text: '',         // Initialize the card detail text field
        card_detail_pictures: ''      // Initialize the card detail pictures field
    });
    const [isCardDetailsTextOpen, setIsCardDetailsTextOpen] = useState(false);

    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = async () => {
        const {data, error} = await supabase.from('card').select();
        if (error) {
            console.error('Error fetching cards:', error);
        } else {
            setCards(data || []);
        }
    };

    const handleDelete = async (id: number) => {
        const { error } = await supabase.from('card').delete().match({ id });
        if (error) {
            console.error('Error deleting card:', error);
        } else {
            setCards(cards.filter(card => card.id !== id));
        }
    };

    const handleEdit = (id: number) => {
        const card = cards.find((card) => card.id === id);
        setCurrentCard(card);
        setIsEditModalOpen(true);
    };

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newCard = { title: form.title, image_logo: form.image_logo };

        const cardResponse = await supabase.from('card').insert([newCard]);
        const firstCard = cardResponse.data ? cardResponse.data[0] : null;
        const cardError = cardResponse.error;

        if (cardError || !firstCard) {
            console.error('Error inserting new card:', cardError);
            return;
        }

        const newCardDetails = {
            title: form.title, // Use the same title for card details
            pictures: form.card_detail_pictures.split(','),
            card_id: firstCard.id,
            text: form.card_detail_text
        };

        const cardDetailResponse = await supabase.from('card_details').insert([newCardDetails]);
        const firstCardDetail = cardDetailResponse.data ? cardDetailResponse.data[0] : null;
        const cardDetailError = cardDetailResponse.error;

        if (cardDetailError || !firstCardDetail) {
            console.error('Error inserting new card details:', cardDetailError);
            return;
        }

        setCards([...cards, { ...firstCard, card_details: firstCardDetail }]);
    };


    const toggleCardDetailsText = () => {
        setIsCardDetailsTextOpen(!isCardDetailsTextOpen);
    };


    return (
        <div className="container p-4 mx-auto">
            <h1 className="mb-4 text-4xl">Cards</h1>
            <form onSubmit={handleSubmit} className="mb-8">
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
                <button
                    type="submit"
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                >
                    Insert New Card
                </button>
            </form>
            <div className="space-y-4">
                {cards.map((card, index) => (
                    <div key={index} className="flex items-center p-4 border rounded shadow-lg justify-between" style={{ minWidth: '300px' }}>
                        <div className="flex items-center">
                            {card.image_logo === "https://example.com/logo.png" ? (
                                <div className="flex items-center justify-center w-16 h-16 mr-4 bg-gray-200">
                                    <span className="text-gray-400">No Image</span>
                                </div>
                            ) : (
                                <img src={card.image_logo} alt={card.title} className="object-cover w-16 h-16 mr-4 max-w-full max-h-full"/>
                            )}
                            <h2 className="text-xl flex-shrink-0">{card.title}</h2>
                        </div>
                        <div className="button-container">
                            <button onClick={() => handleEdit(card.id)} className="px-2 py-1 text-slate-400 bg-transparent hover:bg-green-500 rounded hover:text-white">
                                Edit
                            </button>
                            <button onClick={() => handleDelete(card.id)} className="px-2 py-1 text-white bg-transparent hover:bg-red-500 rounded hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 fill-red-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>

                    </div>
                ))}
            </div>
            {isEditModalOpen && (
                <EditModal card={currentCard} onClose={() => setIsEditModalOpen(false)} onSubmit={handleEdit} />
            )}
        </div>
    );
};

export default HomePage;
