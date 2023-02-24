import React from "react";

import Card from "./Card.jsx";


//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
// style= "width 18rem"

let contador = 6;
const cards = [];

export function cardsValor () {

  for (let i = 0; i < contador; i++)
    cards.push({
      imageUrl:
        "https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png",
      title: "Card title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis totam eaque officiis similique inventore perspiciatis ratione suscipit voluptates.",
      butonUrl: "#",
      butonLabel: "Find Out More!",
    });
}

cardsValor();

//create your first component
const CardsVariable = () => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 m-3">
      {cards.map((card, index) => (
        <div className="col" key={index}>
          <Card
            imageUrl={card.imageUrl}
            title={card.title}
            text={card.text}
            butonLabel={card.butonLabel}
            butonUrl={card.butonUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsVariable;
