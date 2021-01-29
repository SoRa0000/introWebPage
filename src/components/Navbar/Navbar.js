import React, {useState} from 'react'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon,
    MobileIcon,
    NavMenu, 
    NavItem, 
    NavLinks
} from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                    <NavIcon />
                        ULTRA
                    </NavLogo>
                    <MobileIcon onClick = {handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to="/">Нүүр</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/services">Үйлчилгээ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/products">Бүтээгдэхүүн</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
