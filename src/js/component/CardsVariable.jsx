import React from "react";

import Card from "./Card.jsx";

//create your component
const CardsVariable = (props) => {

  const cards = [];

  for (let i = 0; i < props.valor; i++)
    cards.push({
      imageUrl:
        "https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png",
      title: "Card title "+(i+1),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Text " + (i+1),
      butonUrl: "#",
      butonLabel: "Find Out More!",
    });

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
