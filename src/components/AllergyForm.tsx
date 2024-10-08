import React, { useState } from 'react'
import { Plus } from 'lucide-react'

interface AllergyFormProps {
  allergies: string[]
  setAllergies: React.Dispatch<React.SetStateAction<string[]>>
}

const AllergyForm: React.FC<AllergyFormProps> = ({ allergies, setAllergies }) => {
  const [newAllergy, setNewAllergy] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newAllergy && !allergies.includes(newAllergy)) {
      setAllergies([...allergies, newAllergy])
      setNewAllergy('')
    }
  }

  const removeAllergy = (allergy: string) => {
    setAllergies(allergies.filter(a => a !== allergy))
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="mb-4 flex">
        <input
          type="text"
          value={newAllergy}
          onChange={(e) => setNewAllergy(e.target.value)}
          placeholder="Enter an allergy"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition-colors flex items-center"
        >
          <Plus className="mr-2" /> Add
        </button>
      </form>
      <div className="flex flex-wrap gap-2">
        {allergies.map((allergy, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded flex items-center"
          >
            {allergy}
            <button
              onClick={() => removeAllergy(allergy)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  )
}

export default AllergyForm