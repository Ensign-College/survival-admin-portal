import React, { useState } from 'react'

type PictureInputProps = {
  pictures: string[]
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  currentCard?: Card | null
}

const PictureInput: React.FC<PictureInputProps> = (currentCard) => {
  const [picturesState, setPicturesState] = useState<string[]>([])
  const [newPictureUrl, setNewPictureUrl] = useState<string>('')

  const handlePictureDelete = (index: number) => {
    console.log('Delete button clicked')

    const updatedPictures = picturesState.filter((_, i) => i !== index)
    setPicturesState(updatedPictures)
  }

  const handleAddPicture = () => {
    if (newPictureUrl.trim() !== '') {
      setPicturesState([...picturesState, newPictureUrl])
      setNewPictureUrl('')
    }
  }

  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-bold text-gray-700">
        Card Detail Pictures (comma-separated URLs):
      </label>
      <div className="flex">
        <input
          type="text"
          name="card_detail_pictures"
          value={newPictureUrl}
          onChange={(e) => setNewPictureUrl(e.target.value)}
          className="focus:shadow-outline mr-2 flex-grow rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
        <button
          type="button"
          onClick={handleAddPicture}
          className="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-700 focus:outline-none"
        >
          Add
        </button>
      </div>

      <div className="mt-2 flex space-x-2 overflow-x-auto">
        {picturesState.map((pictureUrl, index) => (
          <div key={index} className="relative flex-shrink-0">
            <img
              src={pictureUrl}
              alt={`Card detail ${index}`}
              className="h-16 w-16 object-cover"
            />
            <button
              type="button"
              onClick={() => handlePictureDelete(index)}
              className="absolute right-0 top-0 rounded bg-red-600 px-2 py-1 text-white hover:bg-red-800"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PictureInput
