import React, { useEffect, useState } from 'react'

type PictureInputProps = {
  pictures: string[]
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  currentCard?: Card | null
  handleDeleteImage?: (url: string) => void
  isEditOpen?: boolean
}

const PictureInput: React.FC<PictureInputProps> = ({
  pictures,
  currentCard,
  handleDeleteImage,
  isEditOpen,
}) => {
  const [picturesState, setPicturesState] = useState<string[]>(pictures || [])
  const [newPictureUrl, setNewPictureUrl] = useState<string>('')
  const [load, setLoad] = useState(false)
  const handlePictureDelete = (index: number) => {
    console.log('Delete button clicked')

    const updatedPictures = picturesState.filter((_, i) => i !== index)
    setPicturesState(updatedPictures)
  }

  if (isEditOpen === true && newPictureUrl) {
    // handleDeleteImage(newPictureUrl)
  }

  useEffect(() => {
    console.log('PicturesState ' + picturesState)
  }, [picturesState])

  useEffect(() => {
    console.log(isEditOpen + ' is Edit open')
  }, [isEditOpen])

  const handleAddPicture = () => {
    if (newPictureUrl.trim() !== '') {
      setPicturesState([...picturesState, newPictureUrl])
      setNewPictureUrl('')
    }
  }
  useEffect(() => {
    if (currentCard) {
      setLoad(true)
    }
  }, [currentCard])

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

      {isEditOpen &&
      currentCard?.card_detail_pictures &&
      currentCard &&
      currentCard.card_detail_pictures ? (
        <div className="mt-2 flex space-x-2 overflow-x-auto">
          {currentCard.card_detail_pictures.map((pictureUrl, index) => (
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
      ) : (
        <div className="mt-2 flex space-x-2 overflow-x-auto">
          {picturesState.map((pictureUrl, index) => (
            <div key={index} className="relative flex-shrink-0">
              <img
                src={pictureUrl}
                alt={`Card detail ${index}`}
                className="h-s16 w-16 object-cover"
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
      )}
    </div>
  )
}

export default PictureInput
