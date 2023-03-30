import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies">Movies</NavLink>
                    <li>
                        <NavLink to="/movies/:movieId">MovieDetails</NavLink> 
                    </li>
                    </li>
                </ul>
                
            </nav>
        </div>
    )
}

export default Header