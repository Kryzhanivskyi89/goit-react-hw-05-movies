import React from "react";
import { Suspense } from 'react';
import Header from "components/Header/Header"
import { Outlet } from "react-router-dom"
import Loader from "components/Loader/Loader";


const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>            
        </>
    )
}

export default Layout