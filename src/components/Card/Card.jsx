/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

/* eslint-disable no-unused-vars */
const Card = ({ card }) => {
    const { id, img, category, title, price } = card
    return (
        <div>
            <Link to={`/cards/${id}`}>
            <div className="relative flex w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-48 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={img}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 font-medium">
                        <p>{category}</p>
                        <p className="block font-sans text-lg font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {title}
                        </p>
                        <p>$ {price}</p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        With plenty of talk and listen time, voice-activated Siri access, and an
                        available wireless charging case.
                    </p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Card;