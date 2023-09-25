const Banner = () => {
    return (
        <div>
            <div className="relative mt-10">
                <img src="/public/Rectangle 4288.png" alt="Banner Image" className="w-full h-auto" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl font-bold mb-4">I Grow By Helping People In Need</h1>
                    <form className="mt-5">
                        <input type="text" placeholder="Search here..." className="px-4 py-2  mb-2 rounded-l-lg" />
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