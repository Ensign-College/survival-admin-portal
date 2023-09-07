import { createClient } from '@supabase/supabase-js';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import EditModal from "./EditModal";
import { SUPABASE_API_KEY, SUPABASE_URL } from "../services/supabaseClients";
import AuthForm from './AuthForm';
import PictureInput from "../components/inputs/PictureInput";
import { sendNotification } from '../api/firebase';

import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(SUPABASE_URL as string, SUPABASE_API_KEY as string);
type Card = {
    id: number;
    title: string;
    image_logo: string;
    card_detail_id: number;
};


const HomePage = () => {

    /////////////////////////////////////////////////////////////////////////////////
    ///
    const [isNotificationFormVisible, setIsNotificationFormVisible] = useState(false);
    const toggleNotificationForm = () => {
        setIsNotificationFormVisible(!isNotificationFormVisible);
    };
    const [notificationTitle, setNotificationTitle] = useState('');
    const [notificationDescription, setNotificationDescription] = useState('');
    const [notificationImage, setNotificationImage] = useState('');

    const handleNotificationChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'notificationTitle') {
            setNotificationTitle(value);
        } else if (name === 'notificationDescription') {
            setNotificationDescription(value);
        } else if (name === 'notificationImage') {
            setNotificationImage(value);
        }
    };

    const handleSendNotification = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const notificationData = {
            title: notificationTitle,
            body: notificationDescription,
          };
        
        try {
            await sendNotification(notificationData);
            console.log('Notification sent successfully');
        } catch (error) {
            console.error('Error sending notification:', error);
        }

    };
    ///
    ////////////////////////















    const [cards, setCards] = useState<Card[]>([]);
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

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const handleAuthenticated = () => {
      setIsAuthenticated(true);
    };

    const fetchCards = async () => {
        const {data, error} = await supabase.from('card').select();
        if (error) {
            console.error('Error fetching cards:', error);
        } else {
            console.log("cards: ", data);
            // @ts-ignore
            setCards(data || [] );
        }
    };

    const resetForm = () => {
        setForm({
            title: '',
            image_logo: '',
            card_detail_id: 0,
            card_detail_text: '',
            card_detail_pictures: ''
        });
    };

    const handleDelete = async (id: number) => {
        const {error} = await supabase.from('card').delete().match({id});
        if (error) {
            console.error('Error deleting card:', error);
        } else {
            // @ts-ignore
            setCards(cards.filter(card => card.id !== id));
        }
    };

    const handleEdit = (id: number) => {
        // @ts-ignore
        const card = cards.find((card) => card.id === id);
        // @ts-ignore
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

        if (form.card_detail_text.trim() === '') {
            alert('Card detail text is required');
            return;
        }
        const newCard = {title: form.title, image_logo: form.image_logo};

        const { data, error } = await supabase.from('card').insert([newCard]).select();
        const firstCard = data ? data[0] : null;
        const cardError = error;

        if (cardError || !firstCard) {
            // @ts-ignore
            alert('Error inserting new card:', cardError);
            console.error(cardError)
            return;
        }

        const newCardDetails = {
            title: form.title,
            pictures: form.card_detail_pictures.split(','),
            card_id: firstCard.id,
            text: form.card_detail_text,
        };

        await supabase.from('card_details').insert([newCardDetails]);

        let firstCardDetail = await supabase.from('card_details').select().eq('card_id', firstCard.id).single();
        console.log("card detail: " + firstCardDetail.data.id);
        // Update card_detail_id in the card table
        // @ts-ignore
        let response = await supabase.from('card').update([{card_detail_id: firstCardDetail.data.id}])
            .eq('id', firstCard.id);
        console.log("Response: " + response);
        // @ts-ignore
        const updatedCard = {...firstCard, card_detail_id: firstCardDetail.id};
        // @ts-ignore
        setCards([...cards, updatedCard]);
        resetForm();
    };

    const handleCardUpdate = (updatedCard: Card) => {
        setCards(prevCards => prevCards.map(card => card.id === updatedCard.id ? updatedCard : card));
    };


    const toggleCardDetailsText = () => {
        setIsCardDetailsTextOpen(!isCardDetailsTextOpen);
    };
    

    return (
    <div className="min-h-screen p-8 bg-white">
        <h1 className="pb-8 text-2xl font-bold">Welcome to Survival Admin Portal</h1>
        {isAuthenticated ? (
        <div className="p-2 md:p-8 pt-0 flex flex-col md:flex-row">
                
                <div className='w-full pr-8 md:w-1/3 lg:w-full'>
                    <h1 className="mb-4 text-4xl">New Card</h1>
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
                                        // @ts-ignore
                                        onChange={handleChange}
                                        className="w-full h-32 px-3 py-2 text-gray-700 border rounded shadow appearance-none resize-y focus:outline-none focus:shadow-outline"
                                    ></textarea>
                                </div>
                            )}
                        </div>
                        <PictureInput pictures={form.card_detail_pictures} handleChange={handleChange} />
                        <button
                            type="submit"
                            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        >
                            Insert New Card
                        </button>
                    </form>
                </div>
            
                <div className="w-full space-y-4 md:w-2/3 lg:w-full">
                    <h1 className="mb-4 text-4xl">Current Cards</h1>
                    {cards.map((card, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded shadow-lg hover:bg-teal-800 hover:text-white hover:shadow-slate-950 hover:border-transparent"
                            style={{minWidth: '300px'}}>
                            <div className="flex items-center">
                                {card.image_logo === "https://example.com/logo.png" ? (
                                    <div className="flex items-center justify-center w-16 h-16 mr-4 bg-gray-200">
                                        <span className="text-gray-400">No Image</span>
                                    </div>
                                ) : (
                                    <img src={card.image_logo} alt={card.title}
                                        className="object-cover w-16 h-16 max-w-full max-h-full mr-4"/>
                                )}
                                <h2 className="flex-shrink-0 text-xl">{card.title}</h2>
                            </div>
                            <div className="flex button-container">
                                <button onClick={() => handleEdit(card.id)}
                                        className="px-2 mr-1 bg-transparent rounded text-slate-400 hover:bg-teal-600 hover:text-white">
                                    Edit
                                </button>
                                <div className="group">
                                    <button onClick={() => handleDelete(card.id)}
                                        className="px-2 py-1 text-white bg-transparent rounded group-hover:bg-red-400 group-hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" className="w-6 h-6 text-red-600 group-hover:fill-red-600 group-hover:text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className='w-full pr-8 md:w-1/3 lg:w-full'>
                        <button
                            onClick={toggleNotificationForm}
                            className="mb-4 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        >
                            Notifications
                        </button>

                        {isNotificationFormVisible && (
                            <form onSubmit={handleSendNotification} className="mb-8" autoComplete="off">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700">Title:</label>
                                    <input
                                        autoComplete="off"
                                        type="text"
                                        name="notificationTitle"
                                        value={notificationTitle}
                                        onChange={handleNotificationChange}
                                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700">Description:</label>
                                    <textarea
                                        autoComplete="off"
                                        name="notificationDescription"
                                        value={notificationDescription}
                                        onChange={handleNotificationChange}
                                        className="w-full h-32 px-3 py-2 text-gray-700 border rounded shadow appearance-none resize-y focus:outline-none focus:shadow-outline"
                                    ></textarea>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700">Image URL:</label>
                                    <input
                                        autoComplete="off"
                                        type="text"
                                        name="notificationImage"
                                        value={notificationImage}
                                        onChange={handleNotificationChange}
                                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                                </div>
                                <button
                                    type="submit"
                                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                >
                                    Send Notification
                                </button>
                            </form>
                        )}
                    </div>



                {isEditModalOpen && (
                    <EditModal card={currentCard} supabase={supabase} onClose={() => setIsEditModalOpen(false)} onUpdate={handleCardUpdate} onSubmit={handleEdit}/>
                )}
        </div>
        ) : (
        <AuthForm onAuthenticated={handleAuthenticated} />
        )}
    </div>
    );
};

export default HomePage;