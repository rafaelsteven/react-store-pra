import { NavLink } from "react-router-dom";
const LiItem = ({ menu }) => {
    const activeStyle = 'underline underline-offset-2 ';
    return (
        <li className={menu.className} 
        onClick={menu.isFuntion ?  menu.onClick : undefined}
        >
            {menu.to === "" ? menu.text :
                <NavLink
                    to={menu.to}
                    className={menu.isActive ?
                        ({ isActive }) => (isActive ? activeStyle : "")
                        : ""
                    }
                >
                    {menu.text}
                </NavLink>
            }
        </li>
    );
}

export { LiItem };