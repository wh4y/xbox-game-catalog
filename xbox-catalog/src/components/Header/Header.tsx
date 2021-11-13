import React from 'react';
import HeaderLogos from "./HeaderLogos/HeaderLogos";
import NavMenu from "./NavMenu/NavMenu";
import HeaderFooter from "./HeaderFooter/HeaderFooter";
import HeaderTextContent from "./HeaderTextContent/HeaderTextContent";

const Header = () => {
    return (
        <header className={'md:h-[60vh] sm:h-[30vh] relative'}>
            <div className={'h-2/4'}>
                <div className={'p-4 flex items-center md:justify-start sm:justify-center'}>
                    <HeaderLogos/>
                    <NavMenu/>
                </div>
            </div>
            <div className={'flex flex-col justify-end h-2/4 bg-[#e6e6e6]'}>
                <HeaderFooter/>
            </div>
            <HeaderTextContent/>
        </header>
    );
}

export default Header;