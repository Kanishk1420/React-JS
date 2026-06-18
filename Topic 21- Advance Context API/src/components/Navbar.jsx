import Nav2 from './Nav2'
import { useThemeContext } from '../context/themeUtils'
import { useUserContext } from '../context/userUtils';
const Navbar = () => {
    const { theme } = useThemeContext();
    const { user } =  useUserContext();
    return (
        <div className={theme}>
            <h2>Current Theme:- {theme}</h2>
            <Nav2 />
            <h1>Welcome {user}</h1>
        </div>
    )
}

export default Navbar