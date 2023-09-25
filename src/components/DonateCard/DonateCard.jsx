/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const DonateCard = ({ card }) => {
    const { id, img, category, title, price, category_bg, card_bg, text_color, btn_bg } = card
    return (
        <div>
            <div style={{ backgroundColor: card_bg }} className="relative flex w-full max-w-[48rem] flex-row rounded-xl">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none">
                    <img src={img} alt="image" className="h-48 w-full object-cover" />
                </div>
                <div className="p-6 font-semibold">
                    <button style={{ backgroundColor: category_bg, color: text_color }} className="px-2 rounded text-sm font-semibold">{category}</button>
                    <p className="mb-2 block text-xl font-bold leading-snug tracking-normal text-black antialiased">
                        {title}
                    </p>
                    <p style={{ color: text_color }}>${price}</p>
                    <a className="inline-block" href="#">
                        <button style={{ backgroundColor: btn_bg }} className="px-3 py-2 rounded mt-3 text-white" type="button">View Details</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DonateCard;