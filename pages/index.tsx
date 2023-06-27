import { useState, useEffect } from 'react';
import CardForm from '../src/components/CardForm';
import Card from '../src/components/Card';
import { fetchCards, deleteCard, createCard } from '../src/services/cardAPI';

const HomePage = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchAllCards = async () => {
            const fetchedCards = await fetchCards();
            setCards(fetchedCards);
        };
        fetchAllCards();
    }, []);

    const handleDelete = async (id: number) => {
        const success = await deleteCard(id);
        if (success) {
            setCards(cards.filter(card => card.id !== id));
        }
    };

    const handleSubmit = async (formData) => {
        const newCard = await createCard(formData);
        if (newCard) {
            setCards([...cards, newCard]);
        }
    };

    return (
        <div className="container p-4 mx-auto">
            <h1 className="mb-4 text-4xl">Cards</h1>

            {/* Card Form Component */}
            <CardForm onSubmit={handleSubmit} />

            {/* Cards List */}
            <div className="space-y-4">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        card={card}
                        onDelete={() => handleDelete(card.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
