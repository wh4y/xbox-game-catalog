import type {GetServerSideProps, NextPage} from 'next'
import Head from "next/head";
import Image from "next/image";
import {fetchProducts} from "./../utils/product";
import SideBar from "../components/SideBar/SideBar";
import Showcase from "../components/Showcase/Showcase";
import {IProduct} from "../components/Showcase/Product/Product";
import React from "react";
import Header from "../components/Header/Header";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const products = await fetchProducts({
        filter: ctx.params!.path?.[0],
    })

    return {
        props: {
            products,
        },
    }
}

export interface IHomeProps {
    products: IProduct[],
}

const Home: NextPage<IHomeProps> = ({products}) => {

    return (
        <>
            <Head>
                <link rel="shortcut icon"
                      href="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
                      type="image/png"/>
                <title>Game catalog | Xbox</title>
            </Head>
            <Header/>
            <main className={'flex mx-6 my-7'}>
                <SideBar/>
                <Showcase products={products}/>
            </main>
        </>
    )
}

export default Home
