import React from "react";
import "./Section02.css"
import {articleData2} from "../../../data/ArticleData2"


const Section02 = () => {
  const Content = articleData2 
  console.log(Content);
 return(<>
     <div className="container">
      {Content.map((item, index) => (
        <div key={index} className="item">
         <h1>{item.heading}</h1>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
 
</>);  
}

export default Section02;