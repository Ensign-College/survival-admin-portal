import React from 'react';

interface CardProps {
    card: {
        id: number;
        title: string;
        image_logo: string;
    };
    onDelete: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ card, onDelete }) => {
    return (
        <div className="flex items-center p-4 border rounded shadow-lg justify-between" style={{ minWidth: '300px' }}>
            <div className="flex items-center">
                {card.image_logo === "https://example.com/logo.png" ? (
                    <div className="flex items-center justify-center w-16 h-16 mr-4 bg-gray-200">
                        <span className="text-gray-400">No Image</span>
                    </div>
                ) : (
                    <img src={card.image_logo} alt={card.title} className="object-cover w-16 h-16 mr-4 max-w-full max-h-full" />
                )}
                <h2 className="text-xl flex-shrink-0">{card.title}</h2>
            </div>
            <button onClick={() => onDelete(card.id)} className="px-2 py-1 text-white bg-transparent hover:bg-red-500 rounded hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 fill-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    );
};

export default Card;
