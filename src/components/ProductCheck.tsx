import React from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

interface ProductCheckProps {
  product: { name: string; ingredients: string[] }
  allergies: string[]
}

const ProductCheck: React.FC<ProductCheckProps> = ({ product, allergies }) => {
  const allergenFound = product.ingredients.some(ingredient => 
    allergies.some(allergy => ingredient.toLowerCase().includes(allergy.toLowerCase()))
  )

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">Product Check Result</h2>
      <p className="text-lg mb-2">Product: {product.name}</p>
      {allergenFound ? (
        <div className="flex items-center text-red-600">
          <XCircle className="mr-2" />
          <span>Warning: This product contains allergens you've listed!</span>
        </div>
      ) : (
        <div className="flex items-center text-green-600">
          <CheckCircle className="mr-2" />
          <span>Good news! No listed allergens found in this product.</span>
        </div>
      )}
      <div className="mt-4">
        <h3 className="font-semibold">Ingredients:</h3>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {product.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductCheck