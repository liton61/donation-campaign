import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SelectCategory.css'

const SelectCategory = () => {
    const [category, setCategory] = useState({});
    const { id } = useParams();
    const cards = useLoaderData();

    useEffect(() => {
        const findCategory = cards?.find(card => card.id == id);
        setCategory(findCategory);
    }, [id, cards]);
    const handleAddToDonation = () => {
        const addDonationArray = [];
        const donation = JSON.parse(localStorage.getItem('donation'));
        if (!donation) {
            addDonationArray.push(category)
            localStorage.setItem('donation', JSON.stringify(addDonationArray));
            toast("You have successfully donate !");
        }
        else {
            const isExist = donation.find(card => card.id == id);
            if (!isExist) {
                addDonationArray.push(...donation, category)
                localStorage.setItem('donation', JSON.stringify(addDonationArray));
                toast("You have successfully donate !");
            }
            else {
                toast("You have already donated !");
            }

        }
    }

    return (
        <div>
            <div className="relative flex w-[1200px] mt-10 flex-col rounded-xl text-gray-700">
                <div className="relative">
                    <img src={category.img} alt="Banner Image" className="w-full h-screen donate-img" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between h-1/6 bg-black opacity-50">
                    </div>
                    <button onClick={handleAddToDonation} style={{ backgroundColor: category.btn_bg }} className="absolute bottom-4 left-4-4 bg-[#FF444A] text-white font-semibold py-2 px-4 ml-10 mb-4">
                        Donate ${category.price}
                    </button>
                </div>

                <div className="p-6">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-black antialiased">
                        {category.title}
                    </h4>
                    <p className="mt-3 block font-sans text-l text-justify font-normal leading-relaxed text-gray-700 antialiased">
                        {category.description}
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SelectCategory;
