import { useThemeContext } from '../context/themeUtils';

const Button = () => {
    const { theme, setTheme } = useThemeContext();
    const changeTheme = () => {
        setTheme(theme === 'darkslategray' ? 'lightseagreen' : 'darkslategray')
    }
    return (
        <div>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    )
}

export default Button