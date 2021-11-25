import './App.css';
import Header from "./Components/Header/Header";

import  {Routes, Route} from "react-router-dom";
import Basket from "./Components/Basket/Basket";
import HomePage from "./Routing/HomePage"
import BasketPage from "./Routing/BasketPage";
import MansPage from "./Routing/MansPage";
import WomensPage from "./Routing/WomensPage";
import CatalogPage from "./Routing/CatalogPage";
import SalePage from "./Routing/SalePage";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Basket/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/basket" element={<BasketPage/>}/>
                <Route path="/mans" element={<MansPage/>}/>
                <Route path="/womens" element={<WomensPage/>}/>
                <Route path="/catalog" element={<CatalogPage/>}/>
                <Route path="/sale" element={<SalePage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
