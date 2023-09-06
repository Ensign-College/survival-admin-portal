import React from 'react'
import { TextAreaField, InputField } from '../inputs/InputComponents' // if these are in a separate file
import PictureInput from '../inputs/PictureInput'

interface EditFormProps {
  localCard: Card // Adjust this type as needed based on your Card type
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
}
const EditForm: React.FC<EditFormProps> = ({
  localCard,
  onSubmit,
  handleChange,
}) => (
  <form onSubmit={onSubmit}>
    <InputField
      label="Title"
      name="title"
      value={localCard.title}
      onChange={handleChange}
    />
    <InputField
      label="Image Logo URL"
      name="image_logo"
      value={localCard.image_logo}
      onChange={handleChange}
    />
    <InputField
      label="Card details id"
      name="card_detail_id"
      value={localCard.card_detail_id.toString()}
      onChange={handleChange}
      type="number"
    />
    <TextAreaField
      label="Card Details Text"
      name="card_detail_text"
      value={localCard.card_detail_text}
      onChange={handleChange}
    />
    <label className="mb-2 block text-sm font-bold text-gray-700">
      Card Detail Pictures:
    </label>

    <PictureInput
      pictures={localCard.card_detail_pictures}
      handleChange={handleChange}
    />
    <button
      type="submit"
      className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
    >
      Submit Edited Card
    </button>
  </form>
)

export default EditForm
