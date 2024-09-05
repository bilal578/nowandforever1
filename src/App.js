import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/Home/HomePage";
import ProductPage from "./components/pages/Products/ProductsPage";
import NewsPage from "./components/pages/News/NewsPage";
import AboutPage from "./components/pages/AboutUs/AboutPage";
import CareersPage from "./components/pages/Careers/CareersPage";
import ContactPage from "./components/pages/ContactUs/ContactPage";
import MerchPage from "./components/pages/Merch/MerchPage";
import SpiritsPage from "./components/pages/Spirits/SpiritsPage";
import TobaccoPage from "./components/pages/Tobacco/TobaccoPage"
import SmokeShopPage from "./components/pages/SmokeShop/SmokeShopPage"
import Service01 from "./components/pages/Services/Service01/Service01"
import Service02 from "./components/pages/Services/Service02/Service02";
import Service03 from "./components/pages/Services/Service03/Service03"
import Service04 from "./components/pages/Services/Service04/Service04";
import ProductsCount from "./components/pages/ProductsCount/ProductsCount";
import PrivacyPolicyPage from "./components/pages/PrivacyPolicy/PrivacyPolicyPage";
import MapBox from "./components/map/MapBox";
import Article4 from "./components/pages/Article4/Article4";
import Article6 from "./components/pages/Article6/Article6";
import Article3 from "./components/pages/Article3/Article3";
import Article11 from "./components/pages/Article11/Article11";
import Article2 from "./components/pages/Article2/Article2"
import Article14 from "./components/pages/Article14/Article14";


function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:title" element={<ProductsCount />} />
        <Route path="/services/car-wash" element={<Service01 />} />
        <Route path="/services/fuel-fill-up" element={<Service02 />} />
        <Route path="/services/fresh-food" element={<Service03 />} />
        <Route path="/services/money-services" element={<Service04 />} />
        <Route path="/moos-news" element={<NewsPage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/merch" element={<MerchPage />} />
        <Route path="/spirits" element={<SpiritsPage />} />
        <Route path="/tobacco" element={<TobaccoPage />} />
        <Route path="/smoke-shop" element={<SmokeShopPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/Article14" element={<Article14/>} />
        <Route path="/Article11" element={<Article11/>} />
        <Route path="/Article2" element={ <Article2 />} />
        <Route path="/locations" element={<MapBox />} />
        <Route path="/Article4" element={ <Article4 />} />
        <Route path="/Article6" element={ <Article6/>} />
        <Route path="/Article3" element={ <Article3 />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
