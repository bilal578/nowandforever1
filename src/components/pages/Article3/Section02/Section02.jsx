import React from "react";
import { Article3Data } from "../../../data/Article3Data";
// import ImageCard from "../../../data/Article3Image";
import img from "../../../../assets/News/Article3img2.png"
import img2 from "../../../../assets/News/Article3img1.png"



import "./Section02.css"

const Section02 = () => {
//   const data =  Article3Data; 


 return (<>
          <div className="main-container-art3-sec2" >
          <div className="image-containe-art3-sec2" >  
            <img src={img} alt="" />
            <img src={img2} alt="" />
          </div>
          <div className="pera-container" > 
          <p className="paragraph-art3-sec2">This Mother's Day, Now and Forever turned up fun with our special "Mother Loving Giveaway," delightfully dubbed "Tanks for Moms."
</p>
      <p className="paragraph-art3-sec2">We made it easy for our customers to participate: just spend $20, jot down your details on the receipt, and drop it in the designated box. The excitement was contagious, and we were thrilled to see an astonishing 250 entries pour in!

      </p>
      <p className="paragraph-art3-sec2">From these entries, 22 lucky winners were selected to receive a free full tank of gas. It was a joy to see the smiles on their faces as they got their tanks filled up on us. This giveaway was our heartfelt way of appreciating all the amazing moms out there, making their day brighter and their journeys smoother.
      </p>
      <p className="paragraph-art3-sec2">The success of this event was beyond our expectations, and it truly showcased the spirit of our community. We are grateful to everyone who participated and helped make this giveaway a memorable one.</p>

      <p className="paragraph-art3-sec2">Thank you for being part of the Now and Forever family, and stay tuned for more fun, exciting, and rewarding events and giveaways in the future!
</p>

          </div>
          </div>
  


         {/* <div className="container-art3-sec2">
      <h1 className="heading-art3-sec2">Tanks a Lot, Moms!
      Our Mother's Day Giveaway Was a Hit!</h1>
      <img 
        src={img} 
        alt="Placeholder" 
        className="responsive-image-art3-sec2"
      />
      <p className="paragraph-art3-sec2">This Mother's Day, Now and Forever turned up fun with our special "Mother Loving Giveaway," delightfully dubbed "Tanks for Moms."
</p>
      <p className="paragraph-art3-sec2">We made it easy for our customers to participate: just spend $20, jot down your details on the receipt, and drop it in the designated box. The excitement was contagious, and we were thrilled to see an astonishing 250 entries pour in!

      </p>
      <p className="paragraph-art3-sec2">From these entries, 22 lucky winners were selected to receive a free full tank of gas. It was a joy to see the smiles on their faces as they got their tanks filled up on us. This giveaway was our heartfelt way of appreciating all the amazing moms out there, making their day brighter and their journeys smoother.
      </p>
      <p className="paragraph-art3-sec2">The success of this event was beyond our expectations, and it truly showcased the spirit of our community. We are grateful to everyone who participated and helped make this giveaway a memorable one.</p>

      <p className="paragraph-art3-sec2">Thank you for being part of the Now and Forever family, and stay tuned for more fun, exciting, and rewarding events and giveaways in the future!
</p>

    </div> */}








        {/* <div className="container-art2-sec2">
            {data.map((item, index) => (
                <ImageCard key={index} image={item.image} description={item.description} />
            ))}
        </div> */}
    </>);
}
export default Section02;