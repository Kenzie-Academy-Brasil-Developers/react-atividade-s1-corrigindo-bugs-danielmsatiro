import { useState } from "react";
import { Card } from "../card";
import "./style.css";

export const CardsList = ({ cardsList }) => {
  const [suitFilter, setSuitFilter] = useState(false);

  const handleSuitFilter = (e) => {
    console.log(e.target.id);
    if (e.target.id === suitFilter) {
      setSuitFilter(false);
      e.target.checked = false;
    } else {
      setSuitFilter(e.target.id);
    }
  };

  return (
    <>
      <div className="filter-container">
        <p>Filtrar por naipe</p>
        <div>
          <input
            onClick={handleSuitFilter}
            type="radio"
            id="SPADES"
            name="suit"
          />
          <label for="SPADES">Espadas</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="HEARTS"
            name="suit"
          />
          <label for="HEARTS">Copas</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="CLUBS"
            name="suit"
          />
          <label for="CLUBS">Paus</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="DIAMONDS"
            name="suit"
          />
          <label for="DIAMONDS">Ouros</label>
        </div>
      </div>
      <div>
        {!suitFilter &&
          cardsList.map((actual, index) => <Card card={actual} key={index} />)}

        {suitFilter &&
          cardsList
            .filter((actual) => actual.suit === suitFilter)
            .map((actual, index) => <Card card={actual} key={index} />)}
      </div>
    </>
  );
};
