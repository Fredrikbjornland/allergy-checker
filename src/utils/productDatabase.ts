// This is a mock database of products
const products = [
  {
    barcode: '123456789',
    name: 'Chocolate Chip Cookies',
    ingredients: ['Wheat Flour', 'Sugar', 'Chocolate Chips', 'Butter', 'Eggs', 'Vanilla Extract']
  },
  {
    barcode: '987654321',
    name: 'Almond Milk',
    ingredients: ['Water', 'Almonds', 'Calcium Carbonate', 'Sea Salt', 'Vitamin E', 'Vitamin D2']
  },
  {
    barcode: '456789123',
    name: 'Peanut Butter',
    ingredients: ['Roasted Peanuts', 'Salt', 'Palm Oil']
  }
]

export function getProductByBarcode(barcode: string) {
  return products.find(product => product.barcode === barcode) || null
}