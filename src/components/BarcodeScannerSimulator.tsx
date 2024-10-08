import React, { useState } from 'react'
import { Barcode } from 'lucide-react'

interface BarcodeScannerSimulatorProps {
  onScan: (barcode: string) => void
}

const BarcodeScannerSimulator: React.FC<BarcodeScannerSimulatorProps> = ({ onScan }) => {
  const [barcode, setBarcode] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onScan(barcode)
    setBarcode('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
        placeholder="Enter product barcode"
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition-colors flex items-center"
      >
        <Barcode className="mr-2" /> Scan
      </button>
    </form>
  )
}

export default BarcodeScannerSimulator