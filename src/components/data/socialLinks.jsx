import instagramLogo from "../../assets/Home/instagramLogo.svg"
import facebookLogo from "../../assets/Home/facebookLogo.svg"
import twitterLogo from "../../assets/Home/twitterLogo.svg"
import youtubeLogo from "../../assets/Home/youtubeLogo.svg"
import ticktokLogo from "../../assets/Home/ticktokLogo.svg"

import instagramImage from "../../assets/Home/instagram.svg"
import facebookImage from "../../assets/Home/facebook.svg"
import twitterImage from "../../assets/Home/twitter.svg"
import youtubeImage from "../../assets/Home/youtube.svg"
import ticktokImage from "../../assets/Home/ticktok.svg"

export const socialLinks = [
    {
        bg_image : `${instagramImage}`,
        src: `${instagramLogo}`,
        link: "INSTAGRAM",
        page_url: "https://www.instagram.com/nowandforevertx/?hl=en",
    },
    {
        bg_image : `${twitterImage}`,
        src: `${twitterLogo}`,
        link: "TWITTER",
        page_url: "https://twitter.com/nowandforevertx?lang=en",
    },
    {
        bg_image : `${facebookImage}`,
        src: `${facebookLogo}`,
        link: "FACEBOOK",
        page_url: "https://www.facebook.com/nowandforevertx/",
    },
    {
        bg_image : `${youtubeImage}`,
        src: `${youtubeLogo}`,
        link: "YOUTUBE",
        page_url: "https://www.youtube.com/",
    },
    {
        bg_image : `${ticktokImage}`,
        src: `${ticktokLogo}`,
        link: "TIKTOK",
        page_url: "https://www.tiktok.com/@nowandforeverhtx",
    }
];