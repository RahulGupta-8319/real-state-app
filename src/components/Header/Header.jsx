import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 1100) {
        console.log(!menuOpened);
        return { right: !menuOpened && '-100%' }
    }
}

// const getHeaderBackground = () =>{
//     if(false){

//     }else{
//         return null
//     }
// }

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    return (
        <div className="h-wrapper" style={{}}>
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="" width={100} />

                <OutsideClickHandler
                    onOutsideClick={() => {
                        setMenuOpened(false)
                    }}
                >
                    <div className="flexCenter h-menu"
                        style={getMenuStyles(menuOpened)}
                    >
                        <a href="">Recidence</a>
                        <a href="">Our Value</a>
                        <a href="">Contact us</a>
                        <a href="">Get Started</a>
                        <button className='button'>
                            <a href="">Contact</a>
                        </button>
                    </div>
                    {/* for medium and small screen  */}
                    <div
                        className='menu-icon'
                        onClick={() => setMenuOpened((prev) => !prev)}
                    >
                        <BiMenuAltRight size={30} />
                    </div>
                </OutsideClickHandler>


            </div>
        </div>
    )
}

export default Header