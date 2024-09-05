import React from "react";
import "./SectionArt2-03.css"
import { article4Data } from "../../../data/Article4Data";



const Section03 = () => {
  
 return(<>
     <div className="container-art4-sec3">
      {article4Data .map((item, index) => (
        <div key={index} className="item">
         <h1>{item.heading}</h1>
          <p className="art-4-3-para" >{item.text}</p>
        </div>
      ))}
    </div>
 
</>);  
}

export default Section03;