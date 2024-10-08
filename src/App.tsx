import React, { useState } from 'react'
import { AlertTriangle, Scan, Camera } from 'lucide-react'
import AllergyForm from './components/AllergyForm'
import ProductCheck from './components/ProductCheck'
import BarcodeScannerSimulator from './components/BarcodeScannerSimulator'
import CameraBarcodeScanner from './components/CameraBarcodeScanner'
import { getProductByBarcode } from './utils/productDatabase'

function App() {
  const [allergies, setAllergies] = useState<string[]>([])
  const [scannedProduct, setScannedProduct] = useState<{ name: string; ingredients: string[] } | null>(null)
  const [useCameraScanner, setUseCameraScanner] = useState(false)

  const handleScan = (barcode: string) => {
    const product = getProductByBarcode(barcode)
    setScannedProduct(product)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Allergy Checker</h1>
      
      <AllergyForm allergies={allergies} setAllergies={setAllergies} />
      
      <div className="mt-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <Scan className="mr-2" />
          Scan Product Barcode
        </h2>
        <button
          onClick={() => setUseCameraScanner(!useCameraScanner)}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center"
        >
          <Camera className="mr-2" />
          {useCameraScanner ? 'Use Manual Input' : 'Use Camera Scanner'}
        </button>
        {useCameraScanner ? (
          <CameraBarcodeScanner onScan={handleScan} />
        ) : (
          <BarcodeScannerSimulator onScan={handleScan} />
        )}
      </div>
      
      {scannedProduct && (
        <ProductCheck product={scannedProduct} allergies={allergies} />
      )}
      
      <div className="mt-8 text-sm text-gray-600 flex items-center">
        <AlertTriangle className="mr-2 text-yellow-500" />
        <p>Always consult with a medical professional about your allergies.</p>
      </div>
    </div>
  )
}

export default App