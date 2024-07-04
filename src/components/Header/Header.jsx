import { NavLink } from "react-router-dom";
import style from './Header.module.css'

const Header = ({ isCurrent }) => {
    return (    
        <header className={style.header}>
            <nav className={style.navigation}>
                <a className={style.logo_header} href="./index.html">
                    
                </a>

                <div className={style.navigation_wrap}>
                    <ul className={style.navigation_list}>
                        <li class={style.navigation_item}>
                            <NavLink
                                to='/'
                                className={`${style.navigation_link} ${isCurrent ? style.current : ''}`}  
                                data-hover='Home'
                                >Home
                            </NavLink>
                        </li>
                        <li class={style.navigation_item}>
                            <NavLink
                                to='movies'
                                className={style.navigation_link}  
                                data-hover='Movies'
                                >Movies
                            </NavLink>
                        </li>

                        {/* {navElems.map(({ href, text, data_hover }, y) => (
                            <li key={y}
                                class={style.navigation_item}>
                                <NavLink
                                    to={href}
                                    className={({ isActive }) =>
                                        isActive ? `${style.current}` : `${style.navigation_link}`}
                                    data-hover={data_hover}
                                >{text}
                                </NavLink>
                        </li>
                        ))} */}
                    </ul>                
                </div>
            </nav>
        </header>
        
    )
}

export default Header