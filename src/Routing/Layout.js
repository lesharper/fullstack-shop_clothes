import React, {useContext} from 'react';
import Header from "../Components/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import {AuthContext} from "../Context/Context";
import Basket from "../Components/Basket/Basket";

const Layout = () => {
    const {isAuth} = useContext(AuthContext)

    return (
        <div className="App">
            <Header/>
            {isAuth ? <Basket/> : ''}
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;