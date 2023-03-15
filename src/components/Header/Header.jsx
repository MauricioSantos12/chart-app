import './header.scss';
import { Menu, X } from 'feather-icons-react';
import React, { useState } from 'react';
// import icon from '../../assets/images/icon_page.webp'
const Header = () => {
    const [showMenu, setShowMenu] = useState(false); 
    return (
        <nav>
            {/* <h1>M SANTOS</h1> */}
            {/* <img src={icon} className='iconPage' alt="icon page" /> */}
            <ul className={showMenu ? 'show': ''}>
                <li onClick={()=> setShowMenu(false)}><a href="#" >Home</a></li>
                <li onClick={()=> setShowMenu(false)}><a href="#bar" >Bar Data</a></li>
                <li onClick={()=> setShowMenu(false)}><a href="#doughnut" >Doughnut Data</a></li>
                <li onClick={()=> setShowMenu(false)}><a href="#footer">Footer</a></li>
            </ul>
            <button className="menu-hamburguesa" id="menu-hamburguesa">
                {!showMenu ?
                <Menu onClick={()=> setShowMenu(!showMenu)}/>
                :
                <X onClick={()=> setShowMenu(!showMenu)}/>
                }
            </button>
        </nav>
    )
}

export default Header