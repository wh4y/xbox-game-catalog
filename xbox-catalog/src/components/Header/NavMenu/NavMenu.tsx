import React, {FC} from 'react';

const NavMenu: FC = () => {
    return (
        <div className={'md:flex items-center sm:hidden'}>
            <details className={'header-detail block cursor-pointer'}>
                <summary
                    className={'flex flex-nowrap items-center cursor-pointer hover:underline text-sm p-[8px]'}>
                    Game Pass
                    <svg
                        className="arrow-icon w-4 h-4 mr-1 inline-block transform transition-transform duration-150"
                        viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M91.9,46.9L64,74.8L36.1,46.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2l30,30c0.6,0.6,1.4,0.9,2.1,0.9 s1.5-0.3,2.1-0.9l30-30c1.2-1.2,1.2-3.1,0-4.2C94.9,45.7,93.1,45.7,91.9,46.9z"></path>
                    </svg>
                </summary>
            </details>
            <details className={'header-detail block cursor-pointer'}>
                <summary
                    className={'flex flex-nowrap items-center cursor-pointer hover:underline text-sm p-[8px]'}>
                    Games
                    <svg
                        className="arrow-icon w-4 h-4 mr-1 inline-block transform transition-transform duration-150"
                        viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M91.9,46.9L64,74.8L36.1,46.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2l30,30c0.6,0.6,1.4,0.9,2.1,0.9 s1.5-0.3,2.1-0.9l30-30c1.2-1.2,1.2-3.1,0-4.2C94.9,45.7,93.1,45.7,91.9,46.9z"></path>
                    </svg>
                </summary>
            </details>
            <details className={'header-detail block cursor-pointer'}>
                <summary
                    className={'flex flex-nowrap items-center cursor-pointer hover:underline text-sm p-[8px]'}>
                    Devices
                    <svg
                        className="arrow-icon w-4 h-4 mr-1 inline-block transform transition-transform duration-150"
                        viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M91.9,46.9L64,74.8L36.1,46.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2l30,30c0.6,0.6,1.4,0.9,2.1,0.9 s1.5-0.3,2.1-0.9l30-30c1.2-1.2,1.2-3.1,0-4.2C94.9,45.7,93.1,45.7,91.9,46.9z"></path>
                    </svg>
                </summary>
            </details>
            <details className={'header-detail block cursor-pointer'}>
                <summary className={'flex flex-nowrap items-center hover:underline text-sm p-[8px]'}>
                    Community
                    <svg
                        className="arrow-icon w-4 h-4 mr-1 inline-block transform transition-transform duration-150"
                        viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M91.9,46.9L64,74.8L36.1,46.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2l30,30c0.6,0.6,1.4,0.9,2.1,0.9 s1.5-0.3,2.1-0.9l30-30c1.2-1.2,1.2-3.1,0-4.2C94.9,45.7,93.1,45.7,91.9,46.9z"></path>
                    </svg>
                </summary>
            </details>
            <details className={'header-detail block cursor-pointer'}>
                <summary className={'flex flex-nowrap w-max items-center hover:underline text-sm p-[8px]'}>
                    More
                    <svg
                        className="arrow-icon w-4 h-4 mr-1 inline-block transform transition-transform duration-150"
                        viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M91.9,46.9L64,74.8L36.1,46.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2l30,30c0.6,0.6,1.4,0.9,2.1,0.9 s1.5-0.3,2.1-0.9l30-30c1.2-1.2,1.2-3.1,0-4.2C94.9,45.7,93.1,45.7,91.9,46.9z"></path>
                    </svg>
                </summary>
            </details>
        </div>
    );
}

export default NavMenu;