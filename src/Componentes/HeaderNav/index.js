import MenuLink from '../MenuLink';
import style from './HeaderNav.module.css';

const HeaderNav = () => {

    return(
        <div className={ style.headerNav } >
            <MenuLink to={ "/" } >
                HOME
            </MenuLink>
            <MenuLink to={ "/AboutMe" } >
                ABOUT ME
            </MenuLink>
        </div>
    );

}

export default HeaderNav;