import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QRCodeGenerator: React.FC = () => {
  const [ingredients, setIngredients] = useState('')

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">QR Code Generator</h2>
      <p className="text-sm text-gray-600 mb-2">
        Enter ingredients separated by commas to generate a QR code.
      </p>
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="e.g., milk, eggs, peanuts"
      />
      {ingredients && (
        <div className="flex justify-center">
          <QRCode value={ingredients} size={200} />
        </div>
      )}
    </div>
  )
}

export default QRCodeGenerator