import React, {FC} from 'react';
import Image from "next/image";


export interface IProduct {
    id: string,
    img: string,
    msrp: number,
    price: number,
    title: string,
}

interface IProductProps {
    product: IProduct
}

const Product: FC<IProductProps> = ({product}) => {
    return (
        <article
            className={'game-container md:w-[150px] md:h-[305px] sm:w-[100px] sm:h-[215px] flex flex-col justify-between relative'}
            key={product.id}>
            <div>
                <div className={'game-img transform transition md:max-w-[150px] md:max-h-[225px] sm:max-w-[100px] sm:max-h-[150px]'}>
                    <Image
                        alt={''}
                        layout={'responsive'}
                        height={225}
                        width={150}
                        src={product.img}
                    />
                </div>
                <div className={'mt-[1px]'}>
                    {
                        product.msrp !== product.price &&
                        <span
                            className={'text-sm inline-block w-max tracking-widest uppercase bg-gray-300 p-[1px] pl-[3px] pr-[3px]'}>
                                        {Math.round((product.msrp - product.price) * 100 / product.msrp)}% OFF
                    </span>
                    }
                    <a className={'game-link'} title={product.title}>
                        <h3 className={'game-title text-sm hover:underline overflow-clip mt-[1px]'}>
                            {product.title}
                        </h3>
                    </a>
                </div>
            </div>
            <div className={'text-lg'}>
                {
                    product.msrp !== product.price &&
                    <span className={'line-through text-gray-500 mr-1'}>${product.msrp}</span>
                }
                <span>${product.price}</span>
            </div>
        </article>
    );
}

export default Product;