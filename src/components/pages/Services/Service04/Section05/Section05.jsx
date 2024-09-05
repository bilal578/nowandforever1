import React from "react";
import "./Section05.css"
import img1 from "../../../../../assets/Services/poly_left.png"
import img2 from "../../../../../assets/Services/poly_center.png"
import img3 from "../../../../../assets/Services/poly_right.png"
import img4 from "../../../../../assets/Services/polygon_center.png"




const section05 = () => {

    return (<>
        <div>
        <div className="service-main-container-sec4-2" >

            <div className="poly-img-cont-left" >
                <p className="poly-img-para">  Check balance, <br /> withdraw or deposit <br /> money effortlessly </p>
                <img className="img-left" src={img1} alt="" />


            </div>

            <div className="poly-img-container-center" >
                <p className="poly-img-center-para"> Our SMART ATM offers crypto , Bill pay,<br /> and more. Enjoy Credit and debit card <br /> banking functionalities for task like <br /> cashing check and paying bills </p>
                <img className="img-center-1" src={img2} alt="" />
                <img className="img-center-2" src={img4} alt="" />
            </div>

            <div className="poly-img-cont-right" >
                <p className="poly-img-right-para" >Send or receive money <br /> worldwide with ease </p>
                <img className="img-right" src={img3} alt="" />
            </div>



        </div>

        </div>

    </>);
}
export default section05;
