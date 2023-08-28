import React from 'react'

type PictureInputProps = {
  pictures: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleDeleteImage: (url: string) => void
}

const PictureInput: React.FC<PictureInputProps> = ({
  pictures,
  handleChange,
  handleDeleteImage,
}) => {
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
      <div className="flex space-x-2 mt-2 overflow-x-auto">
        {pictures &&
          pictures.split(',').map((pictureUrl, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={pictureUrl}
                alt={`Card detail ${index}`}
                className="w-16 h-16 object-cover"
              />
              <button
                onClick={() => handleDeleteImage(pictureUrl)}
                className="absolute top-0 right-0 px-2 py-1 text-white bg-red-600 rounded hover:bg-red-800"
              >
                X
              </button>
              {/* You can add delete button functionality here if needed */}
            </div>
          ))}
      </div>
    </div>
  )
}

export default PictureInput
