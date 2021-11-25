import React from 'react';
import Promo from "../Components/Promo/Promo";
import MarketingLinks from "../Components/MarketingLinks/MarketingLinks";
import NewOutfitList from "../Components/NewOufitList/NewOutfitList";

const HomePage = (props) =>{
    return (
        <>
            <Promo/>
            <MarketingLinks slogan = "Новые ощущения"/>
            <NewOutfitList/>
        </>
    );
}

export default HomePage;