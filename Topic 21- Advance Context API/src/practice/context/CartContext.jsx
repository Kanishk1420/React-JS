import { useState, useMemo } from 'react'
import { CartDataContext } from './contextUtils'

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([])
  const value = useMemo(() => ({ cart, setCart }), [cart])
  return (
    <CartDataContext.Provider value={value}>
      {children}
    </CartDataContext.Provider>
  )
}

export default CartContext
