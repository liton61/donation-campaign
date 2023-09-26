/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
/* eslint-disable no-unused-vars */
const Card = ({ card }) => {
    const { id, img, category, title, card_bg, category_bg, text_color } = card
    return (
        <div>
            <Link to={`/cards/${id}`}>
                <div style={{ backgroundColor: card_bg }} className="relative flex w-full flex-col rounded-xl">
                    <div className="h-48 overflow-hidden rounded-t-lg">
                        <img src={img} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-5">
                        <div className="font-medium">
                            <button style={{ backgroundColor: category_bg, color: text_color }} className="px-2 rounded text-sm">{category}</button>
                            <p style={{ color: text_color }} className="block font-sans text-lg font-medium leading-relaxed text-blue-gray-900 antialiased">
                                {title}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;