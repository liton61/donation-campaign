/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const DonateCard = ({ card }) => {
    const { id, img, category, title, price } = card
    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={img}
                        alt="image"
                        className="h-48 w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold">
                        {category}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <h5>${price}</h5>
                    <a className="inline-block" href="#">
                        <button className="" type="button">
                            View Details
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DonateCard;