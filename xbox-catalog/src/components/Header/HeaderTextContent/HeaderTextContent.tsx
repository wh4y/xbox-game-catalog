import React from 'react';

const HeaderTextContent = () => {
    return (
        <span
            className={'text-center block uppercase ' +
            'font-bold absolute ' +
            'transform translate-x-[-50%] translate-y-[-51%] left-1/2 top-1/2 ' +
            'md:text-8xl sm:text-[3.5vh]'}
        >
                    <div className={'text-green w-[70vw]'}>xbox games catalog</div>
                    <div
                        className={'sm:hidden lg:block mt-2 text-xl font-medium normal-case flex-nowrap text-gray-800'}>
                        Browse the complete catalog of all Xbox games.
                    </div>
        </span>
    );
}

export default HeaderTextContent;