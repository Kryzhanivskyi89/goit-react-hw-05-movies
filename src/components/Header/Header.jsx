import { NavLink } from "react-router-dom";

const navElems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    {navElems.map(({ href, text }, i) => (
                        <li key={i}>
                        <NavLink to={href} end>{text}</NavLink>
                    </li>
                    ))}
                </ul>                
            </nav>
        </div>
    )
}

export default Header