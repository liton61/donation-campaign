import { useState } from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";

const Home = () => {
    const [filterData, setFilterData] = useState([]);
    return (
        <div>
            <Banner setFilter={setFilterData}></Banner>
            <Cards filterData={filterData}></Cards>
        </div>
    );
};

export default Home;