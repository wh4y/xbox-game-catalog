import AppLink from "../AppLink/AppLink";
import {FC} from "react";

const SideBar: FC = () => {
    return (
        <aside className={'flex-shrink-0 w-60 sm:hidden md:block'}>
            <h3 className={'text-2xl font-bold mb-4'}>Collections</h3>
            <hr className={'bg-gray-200 text-gray-200 h-1 mb-4'}/>
            <ul className={'block mb-2'}>
                <li>
                    <AppLink href="/" shallow>All Xbox Games</AppLink>
                </li>
                <li>
                    <AppLink href="/new-release" shallow>New Release</AppLink>
                </li>
                <li>
                    <AppLink href="/most-played" shallow>Most Played</AppLink>
                </li>
            </ul>
            <form action="">
                <h3 className={'text-2xl font-bold mb-4 mt-5'}>Filters</h3>
                <button type={'reset'} className={'uppercase font-extrabold text-green'}>
                    Clear filters
                </button>
                <hr className={'bg-gray-200 text-gray-200 h-1 mt-5 mb-4'}/>
                <details className={'bg-gray-50'}>
                    <summary className={'cursor-pointer p-3 mb-1 hover:shadow bg-gray-200 hover:bg-gray-300'}>
                        <svg
                            className="arrow-icon w-7 h-7 mr-1 inline-block transform transition-transform duration-150 -rotate-90"
                            viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M91.9,46.9L64,74.8L36.1,46.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2l30,30c0.6,0.6,1.4,0.9,2.1,0.9 s1.5-0.3,2.1-0.9l30-30c1.2-1.2,1.2-3.1,0-4.2C94.9,45.7,93.1,45.7,91.9,46.9z"></path>
                        </svg>
                        Available on
                    </summary>
                    <fieldset>
                        <ul>
                            <li>
                                <input name={'Available on'} type="radio" id={'filter-item-1'}
                                       className={'available-radio absolute invisible h-0 w-0'}/>
                                <label className={'available-label block p-3 cursor-pointer hover:bg-gray-200'}
                                       htmlFor={'filter-item-1'}>Xbox Series X|S</label>
                            </li>
                            <li>
                                <input name={'Available on'} type="radio" id={'filter-item-2'}
                                       className={'available-radio absolute invisible h-0 w-0'}/>
                                <label className={'available-label block p-3 cursor-pointer hover:bg-gray-200'}
                                       htmlFor={'filter-item-2'}>Xbox One</label>
                            </li>
                            <li>
                                <input name={'Available on'} type="radio" id={'filter-item-3'}
                                       className={'available-radio absolute invisible h-0 w-0'}/>
                                <label className={'available-label block p-3 cursor-pointer hover:bg-gray-200'}
                                       htmlFor={'filter-item-3'}>Xbox 360</label>
                            </li>
                            <li>
                                <input name={'Available on'} type="radio" id={'filter-item-4'}
                                       className={'available-radio absolute invisible h-0 w-0'}/>
                                <label className={'available-label block p-3 cursor-pointer hover:bg-gray-200'}
                                       htmlFor={'filter-item-4'}>PC</label>
                            </li>
                        </ul>
                    </fieldset>
                </details>
                <hr className={'bg-gray-200 text-gray-200 h-1 mt-5 mb-4'}/>
                <details className={'bg-gray-50'}>
                    <summary className={'cursor-pointer p-3 mb-1 hover:shadow bg-gray-200 hover:bg-gray-300'}>
                        <svg
                            className="arrow-icon w-7 h-7 mr-1 inline-block transform transition-transform duration-150 -rotate-90"
                            viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M91.9,46.9L64,74.8L36.1,46.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2l30,30c0.6,0.6,1.4,0.9,2.1,0.9 s1.5-0.3,2.1-0.9l30-30c1.2-1.2,1.2-3.1,0-4.2C94.9,45.7,93.1,45.7,91.9,46.9z"></path>
                        </svg>
                        Genre
                    </summary>
                </details>
                <hr className={'bg-gray-200 text-gray-200 h-1 mt-5 mb-4'}/>
                <details className={'bg-gray-50'}>
                    <summary className={'cursor-pointer p-3 mb-1 hover:shadow bg-gray-200 hover:bg-gray-300'}>
                        <svg
                            className="arrow-icon w-7 h-7 mr-1 inline-block transform transition-transform duration-150 -rotate-90"
                            viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M91.9,46.9L64,74.8L36.1,46.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2l30,30c0.6,0.6,1.4,0.9,2.1,0.9 s1.5-0.3,2.1-0.9l30-30c1.2-1.2,1.2-3.1,0-4.2C94.9,45.7,93.1,45.7,91.9,46.9z"></path>
                        </svg>
                        Features
                    </summary>
                </details>
                <hr className={'bg-gray-200 text-gray-200 h-1 mt-5 mb-4'}/>
                <details className={'bg-gray-50'}>
                    <summary className={'cursor-pointer p-3 mb-1 hover:shadow bg-gray-200 hover:bg-gray-300'}>
                        <svg
                            className="arrow-icon w-7 h-7 mr-1 inline-block transform transition-transform duration-150 -rotate-90"
                            viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M91.9,46.9L64,74.8L36.1,46.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2l30,30c0.6,0.6,1.4,0.9,2.1,0.9 s1.5-0.3,2.1-0.9l30-30c1.2-1.2,1.2-3.1,0-4.2C94.9,45.7,93.1,45.7,91.9,46.9z"></path>
                        </svg>
                        Maturity Rating
                    </summary>
                </details>
            </form>
        </aside>
    );
}

export default SideBar;