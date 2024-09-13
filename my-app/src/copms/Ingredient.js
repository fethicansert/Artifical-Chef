import React from 'react'

const Ingredient = ({ ingredient }) => {

  return (
    <li>
      {ingredient.quantity + ' '}
      {ingredient.quantity_unit + ' '}
      {ingredient.name}
    </li>
  )
}

export default Ingredient
