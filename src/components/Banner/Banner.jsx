/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import './Banner.css';

const Banner = ({ setFilter }) => {
    const [cards, setCards] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        const categoryFilter = cards.filter(donation => donation.category.toLowerCase() === search.toLowerCase());
        setFilter(categoryFilter);
        setSearch('')
    }
    return (
        <div>
            <div className="relative mx-2 mt-10">
                <img src="/banner.png" alt="Banner Image" className="w-full h-auto" />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-60"></div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                    <h1 className="text-black text-4xl font-bold mb-4">I Grow By Helping People In Need</h1>
                    <form onSubmit={(e) => handleSubmit(e)} className="mt-5">
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search here..." className="input-field px-4 py-2  mb-2 rounded-l-lg" />
                        <button type="submit" className="bg-[#FF444A] hover:bg-[#eb4046] text-white font-bold py-2 px-4 rounded-r-lg">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;