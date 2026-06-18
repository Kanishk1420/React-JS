import AuthProvider from '../context/AuthContext'
import CartProvider from '../context/CartContext'
import ThemeProvider from '../context/ThemeContext'

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default AppProviders
