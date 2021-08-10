import React, { useState, useEffect } from 'react';
import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";
import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    Menu,
    MenuItem,
    MenuLink,
} from './Navbar.style';
export default function Navbar(){
  
    return (
        <div>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon/>
                            News App
                        </NavLogo>
                        <Menu>
                            <MenuLink to="/bookmark">Bookmark</MenuLink>
                        </Menu>

                    </NavbarContainer>

                </Nav>
            </IconContext.Provider>
        </div>
    )
}
