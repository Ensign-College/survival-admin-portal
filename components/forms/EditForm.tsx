import React, { useEffect, useState } from 'react'
import { TextAreaField, InputField } from '../inputs/InputComponents' // if these are in a separate file
import PictureInput from '../inputs/PictureInput'

interface EditFormProps {
  localCard: Card // Adjust this type as needed based on your Card type
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  handleDeleteImage?: (url: string) => void
}
const EditForm: React.FC<EditFormProps> = ({
  localCard,
  onSubmit,
  handleChange,
  handleDeleteImage,
}) => {
  const [picturesArray, setPicturesArray] = useState([] as string[])

  useEffect(() => {
    let newItem = ''

    const characters = localCard.card_detail_pictures

    if (characters) {
      for (let i = 0; i < characters.length; i++) {
        newItem += characters[i]
      }
    }

    const updatedArray = [...picturesArray, newItem]
    setPicturesArray(updatedArray)
  }, [localCard.card_detail_pictures])

  return (
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
      {localCard && localCard.card_detail_id && (
        <InputField
          label="Card details id"
          name="card_detail_id"
          value={localCard.card_detail_id.toString()}
          onChange={handleChange}
          type="number"
        />
      )}
      <TextAreaField
        label="Card Details Text"
        name="card_detail_text"
        value={localCard.card_detail_text}
        onChange={handleChange}
      />
      {localCard !== null && Array.isArray(localCard.card_detail_pictures) && (
        <PictureInput
          pictures={localCard.card_detail_pictures}
          handleChange={handleChange}
          handleDeleteImage={handleDeleteImage}
          onDataUpdate={(updatedData) => setPicturesArray(updatedData)}
        />
      )}
      <button
        type="submit"
        className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
      >
        Submit Edited Card
      </button>
    </form>
  )
}

export default EditForm
