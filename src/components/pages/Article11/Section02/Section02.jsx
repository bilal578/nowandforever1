import React from "react";
import "./Section02.css"
import Card from "../../Article11card/Article11Card"
import { Article11Data } from "../../../data/Article11Data"


const Section02 = () => {
    const data = Article11Data
    console.log(data);

    return (<>
       <div className="card-containerArticle11">
      {data.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          text={card.text}
        />
      ))}
    </div>
    </>)
}
export default Section02;