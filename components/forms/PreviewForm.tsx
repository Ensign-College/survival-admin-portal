import React from "react";

interface PreviewFormProps {
    localCard: Card; // Adjust this type as needed based on your Card type
    onClose: () => void; // onClose function to close the modal
}

const PreviewForm: React.FC<PreviewFormProps> = ({ localCard, onClose }) => (
    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
        <div className="modal-content p-8 bg-white rounded shadow max-w-md w-full">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">
                {/* Close button icon, e.g., X */}
                &#10006;
            </button>
            <h2 className="text-xl font-bold mb-4">{localCard.title}</h2>
            <img src={localCard.image_logo} alt="Image Logo" className="w-16 h-16 object-cover mb-4" />
            <p className="mb-4">{localCard.card_detail_text}</p>
            <div className="flex space-x-2 mb-4">
                {localCard.card_detail_pictures && localCard.card_detail_pictures.split(',').map((pictureUrl, index) => (
                    <div key={index} className="relative">
                        <img src={pictureUrl} alt={`Card detail ${index}`} className="w-16 h-16 object-cover" />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default PreviewForm;
