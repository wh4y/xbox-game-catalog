import React, {FC} from 'react';
import {IHomeProps} from "../../pages/[[...path]]";
import Product from "./Product/Product";
import {v4} from "uuid";

const Showcase: FC<IHomeProps> = ({products}) => {
    return (
        <section className={'md:ml-14 sm:ml-2 w-full block'}>
            <div className={'text-xs mt-3 mb-1'}>Viewing 1-20 of 554 results</div>
            <button type={'reset'} className={'uppercase font-extrabold text-green'}>
                Clear filters
            </button>
            <div className={'md:w-[95%] sm:w-[100%] sm:ml-3 grid md:grid-cols-auto-fit-md sm:grid-cols-auto-fit-sm md:gap-y-8 sm:gap-y-5 gap-x-9 mt-5 h-full relative'}>
                {
                    products.map(product => <Product key={v4()} product={product}/>)
                }
            </div>
        </section>
    );
}

export default Showcase;