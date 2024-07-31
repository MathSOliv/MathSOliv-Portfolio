import { NavLink } from "react-router-dom";

import style from './MenuLink.module.css';

const MenuLink = ({ children, to }) => {

    return(
        <NavLink
            className={({ isActive }) => `
                ${ style.linkNav }
                ${ isActive ? style.linkSelect : "" }
            ` }
            to={ to }
            end
        >
            {({ isActive }) => (
                <>
                    <span>{ children }</span>
                    <div className={ isActive ? style.divActive : "" } ></div>
                </>
            )}
        </NavLink>
    )

}

export default MenuLink;