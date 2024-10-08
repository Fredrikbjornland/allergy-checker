import React, { useState } from 'react'

interface QRCodeScannerProps {
  onScan: (data: string) => void
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ onScan }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onScan(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter QR code content"
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition-colors"
      >
        Check
      </button>
    </form>
  )
}

export default QRCodeScanner