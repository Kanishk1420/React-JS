import Nav2 from './Nav2'
import { useThemeContext } from '../context/themeUtils'

const Navbar = () => {
    const { theme } = useThemeContext();
    return (
        <div className={theme}>
            <h2>Current Theme:- {theme}</h2>
            <Nav2 />
        </div>
    )
}

export default Navbar