import './App.css';
import Header from "./Components/Header/Header";

import {Routes, Route} from "react-router-dom";
import Basket from "./Components/Basket/Basket";
import HomePage from "./Routing/HomePage"
import BasketPage from "./Routing/BasketPage";
import MansPage from "./Routing/MansPage";
import WomensPage from "./Routing/WomensPage";
import CatalogPage from "./Routing/CatalogPage";
import SalePage from "./Routing/SalePage";
import Footer from "./Components/Footer/Footer";
import {useEffect, useState} from "react";
import {authentication, get_balance} from "./Axios/users";
import {AdminContext, AuthContext, BalanceContext, EmailContext, IdContext} from "./Context/Context";
import AdminPage from "./Routing/AdminPage";
import LikedPage from "./Routing/LikedPage";
import Layout from "./Routing/Layout";
import SinglePage from "./Routing/SinglePage";

function App() {


    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const [email, setEmail] = useState(null);
    const [id, setId] = useState(null);
    const [balance, setBalance] = useState(null)


    useEffect(() => {
        authentication(setIsAuth, setEmail, setId, setIsAdmin);
    }, []);

    useEffect(() => {
        get_balance(setBalance)
    }, [balance])

    return (
        <div className="App">
            <AuthContext.Provider value={{isAuth, setIsAuth}}>
                <AdminContext.Provider value={{isAdmin, setIsAdmin}}>
                    <EmailContext.Provider value={{email, setEmail}}>
                        <IdContext.Provider value={{id, setId}}>
                            <BalanceContext.Provider value={{balance, setBalance}}>
                                <Routes>
                                    <Route path="/" element={<Layout/>}>
                                        <Route path="/" element={<HomePage/>}/>
                                        <Route path="/basket" element={<BasketPage/>}/>
                                        <Route path="/single/:id" element={<SinglePage/>}/>
                                        <Route path="/mans" element={<MansPage/>}/>
                                        <Route path="/womens" element={<WomensPage/>}/>
                                        <Route path="/catalog" element={<CatalogPage/>}/>
                                        <Route path="/sale" element={<SalePage/>}/>
                                        <Route path="/liked" element={<LikedPage/>}/>
                                        <Route path="/admin_control" element={<AdminPage/>}/>
                                    </Route>
                                </Routes>
                            </BalanceContext.Provider>
                        </IdContext.Provider>
                    </EmailContext.Provider>
                </AdminContext.Provider>
            </AuthContext.Provider>

        </div>
    );
}

export default App;
