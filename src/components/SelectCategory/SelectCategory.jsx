import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SelectCategory = () => {
    const [category, setCategory] = useState({});
    const { id } = useParams();
    const cards = useLoaderData();

    useEffect(() => {
        const findCategory = cards?.find(card => card.id == id);
        setCategory(findCategory);
    }, [id, cards]);
    console.log(category);

    return (
        <div>
            <div className="relative flex w-[1200px] mt-10 flex-col rounded-xl text-gray-700">
                <div className="relative">
                    <img src={category.img} alt="Banner Image" className="w-full h-screen" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between h-1/6 bg-black opacity-50">
                    </div>
                    <button className="absolute bottom-4 left-4-4 bg-[#FF444A] text-white font-semibold py-2 px-4 ml-10 mb-4">
                    Donate $290
                    </button>
                </div>



                <div className="p-6">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-black antialiased">
                        Good Education
                    </h4>
                    <p className="mt-3 block font-sans text-l text-justify font-normal leading-relaxed text-gray-700 antialiased">
                        There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SelectCategory;
