import React from 'react';

interface CardProps {
    id: number;
    title: string;
    image_logo: string;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    // card_detail_id: number;
}

const Card: React.FC<CardProps> = ({title, id, image_logo, onEdit, onDelete}) => {

    return (
        <div id={"element_" + id}
            className="flex items-center justify-between p-4 border rounded shadow-lg hover:bg-teal-800 hover:text-white hover:shadow-slate-950 hover:border-transparent"
            style={{minWidth: '300px'}}>
            <div className="flex items-center">
                {image_logo === "https://example.com/logo.png" ? (
                    <div className="flex items-center justify-center w-16 h-16 mr-4 bg-gray-200">
                        <span className="text-gray-400">No Image</span>
                    </div>
                ) : (
                    <img src={image_logo} alt={title}
                         className="object-cover w-16 h-16 max-w-full max-h-full mr-4"/>
                )}
                <h2 className="flex-shrink-0 text-xl">{title}</h2>
            </div>
            <div className="flex button-container">
                <button onClick={() => onEdit(id)}
                        className="px-2 mr-1 bg-transparent rounded text-slate-400 hover:bg-teal-600 hover:text-white">
                    Edit
                </button>
                <div className="group">
                    <button onClick={() => onDelete(id)}
                            className="px-2 py-1 text-white bg-transparent rounded group-hover:bg-red-400 group-hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor"
                             className="w-6 h-6 text-red-600 group-hover:fill-red-600 group-hover:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;