import React, {ChangeEvent, FormEvent, useState} from 'react';
import axios from 'axios';

type Card = {
    image_logo: string;
    title: string;
    id?: number;
};

type Props = {
    onNewCard: (card: Card) => void;
};

const CardForm: React.FC<Props> = ({onNewCard}) => {
    const [newCardName, setNewCardName] = useState('');
    const [newCardImageUrl, setNewCardImageUrl] = useState('');

    const handleAddCard = (e: FormEvent) => {
        e.preventDefault();
        const newCard: Card = {
            image_logo: newCardImageUrl,
            title: newCardName
        };

        axios.post<Card>('http://192.168.169.106:8000/Cards', newCard)
            .then(response => {
                onNewCard(response.data);
            });
    };

    return (
        <form onSubmit={handleAddCard}>
            <input
                type="text"
                placeholder="Card Name"
                value={newCardName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setNewCardName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Image URL"
                value={newCardImageUrl}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setNewCardImageUrl(e.target.value)}
            />
            <button type="submit">Add Card</button>
        </form>
    );
};

export default CardForm;
