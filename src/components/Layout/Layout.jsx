import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";


const Layout = (props) => {
    return (
        <>
            <Header />
            <Navbar/>
            <main className="main">{props.children}</main>
            <Footer />
        </>
    )
}

export default Layout;