import { NavLink } from "react-router-dom"; 

const Header = () => {
    return (
        <ul>
            <li><NavLink to="/">메인가기</NavLink></li>
            <li><NavLink to="/counter">카운터가기!</NavLink></li>
        </ul>
    )
}

export default Header;