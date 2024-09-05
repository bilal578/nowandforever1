import auto from "../../assets/Home/auto.svg"
import beverages from "../../assets/Home/beverages.svg"
import carwash from "../../assets/Home/carwash.svg"
import food from "../../assets/Home/food.svg"
import fuel from "../../assets/Home/fuel.svg"
import Merch from "../../assets/Home/Merch.png"
import grocery from "../../assets/Home/grocery.svg"
import smokeshop from "../../assets/Home/smokeshop.svg"
import moneycrypto from "../../assets/Home/money-crypto.svg"
import { Link } from "react-router-dom"

export const Items = [
    {
        src: `${moneycrypto}`,
        heading: "MONEY & CRYPTO SERVICES",
        link: "https://staging.nowandforever.com/services/money-services"
    },
    // {
    //     src: `${auto}`,
    //     heading: "AUTO",
    // },
    {
        src: `${beverages}`,
        heading: "BEVERAGES",
        link:"https://www.doordash.com/convenience/store/28073144/category/drinks-751/sub-category/soda-810/?sortBy=unspecified"
    },
    {
        src: `${Merch}`,
        heading: "MERCH",
        link:"/merch"

        
    },
    {
        src: `${grocery}`,
        heading: "GROCERY",
        link: "https://www.doordash.com/convenience/store/28073144/"
    },
    {
        src: `${fuel}`,
        heading: "FUEL",
        link: "https://staging.nowandforever.com/services/fuel-fill-up"
    },
    {
        src: `${food}`,
        heading: "FOOD",
        link: "https://www.doordash.com/convenience/store/28073144/category/snacks-758"
    },
    {
        src: `${carwash}`,
        heading: "CAR WASH",
        link: "https://staging.nowandforever.com/services/car-wash"
    },
    {
        src: `${smokeshop}`,
        heading: "SMOKE SHOP",
    },
];
