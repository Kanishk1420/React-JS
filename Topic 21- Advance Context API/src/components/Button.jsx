import { useThemeContext } from '../context/themeUtils';
import { useUserContext } from '../context/userUtils';
const Button = () => {
    const { theme, setTheme } = useThemeContext();
    const { user, setUser } = useUserContext();
    const changeTheme = () => {
        setTheme(theme === 'darkslategray' ? 'lightseagreen' : 'darkslategray')
    }
     const changeUser = (e) => {
        e.preventDefault();
        setUser(user);
        console.log(user);
    }
    return (
        <div>
            <button onClick={changeTheme}>Change Theme</button>
            <h1>Welcome {user}</h1>
            <form onSubmit={changeUser}>
                <input type="text" placeholder='Enter your name' onChange={(e) => setUser(e.target.value)} />
            </form>
        </div>
    )
}

export default Button