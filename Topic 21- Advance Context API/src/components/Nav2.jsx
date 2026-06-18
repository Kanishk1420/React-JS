import { useThemeContext } from "../context/themeUtils"

const Nav2 = () => {
    const { theme } = useThemeContext();

    return (
        <div className='nav2'>
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Services</h4>
            <h4>{theme}</h4>
        </div>
    )
}

export default Nav2