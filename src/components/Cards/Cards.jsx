/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({ filterData }) => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-2 mt-20 mb-20">
            {
                filterData.length == 0 ? cards.map(card => <Card key={card.id} card={card}></Card>) : filterData.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;