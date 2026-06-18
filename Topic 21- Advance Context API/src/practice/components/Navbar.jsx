import { useThemeContext } from '../../practice/context/contextUtils'

const Navbar = () => {
  const { theme, setTheme } = useThemeContext();

  const changeTheme = () => {
    setTheme(theme === 'white' ? 'dark' : 'white')
  }

  return (
    <div
      style={{
        backgroundColor: theme === 'white' ? '#ffffff' : '#1a1a1a',
        color: theme === 'white' ? '#000000' : '#ffffff',
        padding: '20px',
        transition: 'all 0.3s ease',
      }}
    >
      <h2>Current Theme:- {theme}</h2>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar