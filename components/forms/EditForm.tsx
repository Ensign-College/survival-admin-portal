import React from "react";
import {InputField, MarkDownEditorField, MarkDownEditorTitleField} from '../inputs/InputComponents'; // if these are in a separate file

interface EditFormProps {
    localCard: Card; // Adjust this type as needed based on your Card type
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleDeleteImage: (url: string) => void;
}
const EditForm: React.FC<EditFormProps> = ({ localCard, onSubmit, handleChange, handleDeleteImage }) => (
    <form onSubmit={onSubmit}>
        <MarkDownEditorTitleField label={"Title"} value={localCard.title} handleQuillChange={handleChange}/>
        <InputField label="Image Logo URL" name="image_logo" value={localCard.image_logo} onChange={handleChange} />
        <InputField label="Card details id" name="card_detail_id" value={localCard.card_detail_id ? localCard.card_detail_id.toString() : ""} onChange={handleChange} type="number" />
        <MarkDownEditorField label={"Card Details Text"} value={localCard.card_detail_text} handleQuillChange={handleChange}/>
        <label className="block mb-2 text-sm font-bold text-gray-700">Card Detail Pictures:</label>
        <div className="flex space-x-2 mb-2">
            {localCard.card_detail_pictures && localCard.card_detail_pictures.split(',').map((pictureUrl, index) => (
                <div key={index} className="relative">
                    <img src={pictureUrl} alt={`Card detail ${index}`} className="w-16 h-16 object-cover" />
                    <button
                        onClick={() => handleDeleteImage(pictureUrl)}
                        className="absolute top-0 right-0 px-2 py-1 text-white bg-red-600 rounded hover:bg-red-800"
                    >
                        X
                    </button>
                </div>
            ))}
        </div>

        <InputField label="Add More Images (comma separated URLs)" name="card_detail_pictures" value="" onChange={handleChange} />
        <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
            Submit Edited Card
        </button>
    </form>
);

export default EditForm;
