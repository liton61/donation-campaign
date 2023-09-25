/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

/* eslint-disable no-unused-vars */
const Card = ({ card }) => {
    const { id, img, category, title, price, btn_bg, card_bg, category_bg, text_color, description } = card
    return (
        <div>
            <Link to={`/cards/${id}`}>
                <div style={{ backgroundColor: card_bg }} className="relative flex w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="h-48 overflow-hidden rounded-t-lg bg-white bg-clip-border text-gray-700">
                        <img src={img} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-6">
                        <div className="mb-2 font-medium">
                            <button style={{ backgroundColor: category_bg, color: text_color }} className="px-2 rounded text-sm">{category}</button>
                            <p style={{ color: text_color }} className="block font-sans text-lg font-medium leading-relaxed text-blue-gray-900 antialiased">
                                {title}
                            </p>
                            <p style={{ color: text_color }}>${price}</p>
                        </div>
                        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                            {description}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;