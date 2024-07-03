import { NavLink } from "react-router-dom";
import style from './Header.module.css'


const navElems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const Header = () => {
    return (        
            <nav className={style.nav}>
                <ul className={style.list}>
                    {navElems.map(({ href, text }, y) => (
                        <li key={y}>
                            <NavLink
                                to={href}
                                className={({ isActive }) =>
                                    isActive ? `${style.active}` : `${style.link}`}
                            >{text}</NavLink>
                    </li>
                    ))}
                </ul>                
            </nav>
        
    )
}

export default Header