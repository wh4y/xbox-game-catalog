import React from 'react';
import Image from "next/image";

const HeaderFooter = () => {
    return (
        <div className={'flex  flex-wrap sm:justify-center lg:justify-between mx-20 mb-8 items-center'}>
            <div className={'flex w-[400px] h-8'}>
                <input type={'search'} className={'search-games-input w-full h-full'}/>
            </div>
            <div className={'justify-between items-center w-[300px] font-bold text-sm sm:hidden lg:flex'}>
                <div className={'flex flex-col max-w-[150px] items-center relative'}>
                    <Image
                        id={'buy-card'}
                        width={'61'}
                        height={'43'}
                        src={'https://compass-ssl.xbox.com/assets/cc/e5/cce50399-5a85-4ac5-9741-43c34f7959c0.svg?n=Games-Catalog_Image-0_Buy-GC_63x44.svg'}
                    />
                    <a className={'game-link'}>
                        <label htmlFor={'buy-card'} className={'text-bold text-green-dark'}>
                            buy a gift card
                        </label>
                    </a>
                </div>
                <div className={'flex flex-col max-w-[150px] items-center relative'}>
                    <Image
                        id={'buy-card'}
                        width={'61'}
                        height={'43'}
                        src={'https://compass-ssl.xbox.com/assets/2c/73/2c73be5d-c3b8-4a99-953b-0db3dcdcffde.svg?n=Games-Catalog_Image-0_QR-Code_44x44.svg'}
                    />
                    <a className={'game-link'}>
                        <label htmlFor={'buy-card'} className={'text-bold text-green-dark'}>
                            use code
                        </label>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeaderFooter;