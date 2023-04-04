import { NavLink } from "react-router-dom";
import style from './Header.module.css'
const navElems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const Header = () => {
    return (
        <div>
            <nav className={style.nav}>
                <ul className={style.list}>
                    {navElems.map(({ href, text }, i) => (
                        <li key={i}>
                            <NavLink
                                to={href}
                                className={({ isActive }) =>
                                    isActive ? `${style.active}` : `${style.link}`}
                            >{text}</NavLink>
                    </li>
                    ))}
                </ul>                
            </nav>
        </div>
    )
}

export default Header