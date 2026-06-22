import LoginButton from './practice/components/LoginButton';
import Cart from './practice/components/Cart';
import Navbar from './practice/components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { useThemeContext } from './practice/context/contextUtils';

const App = () => {
  const { theme } = useThemeContext();

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: theme === 'white' ? '#ffffff' : '#1a1a1a',
        color: theme === 'white' ? '#000000' : '#ffffff',
        transition: 'all 0.3s ease',
      }}
    >
      <Navbar />
      <Routes>
        <Route path='/' element={<LoginButton />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
