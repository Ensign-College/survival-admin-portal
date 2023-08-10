import React from 'react';

type PictureInputProps = {
    pictures: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PictureInput: React.FC<PictureInputProps> = ({ pictures, handleChange }) => {
    return (
        <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
                Card Detail Pictures (comma-separated URLs):
            </label>
            <input
                type="text"
                name="card_detail_pictures"
                value={pictures}
                onChange={handleChange}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
            <div className="flex space-x-2 mt-2">
                {pictures &&
                    pictures.split(',').map((pictureUrl, index) => (
                        <div key={index} className="relative">
                            <img src={pictureUrl} alt={`Card detail ${index}`} className="w-16 h-16 object-cover" />
                            {/* You can add delete button functionality here if needed */}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default PictureInput;
