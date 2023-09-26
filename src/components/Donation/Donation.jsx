import { useEffect, useState } from "react";
import DonateCard from "../DonateCard/DonateCard";

const Donation = () => {
    const [donate, setDonate] = useState([]);
    const [noDonate, setNoDonate] = useState(false);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        const donation = JSON.parse(localStorage.getItem('donation'));
        if (donation) {
            setDonate(donation)
        }
        else {
            setNoDonate('No donation');
        }
    }, [])
    console.log(donate);
    return (
        <div className="mx-5">
            {
                noDonate ? <p className="h-[80vh] flex justify-center items-center">{noDonate}</p> : <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                        {
                            donate.slice(0, dataLength).map(card => <DonateCard key={card.id} card={card}></DonateCard>)
                        }
                    </div>
                </div>
            }
            <div className={dataLength === donate.length && 'hidden'}>
                <div className="flex justify-center mt-7">
                    <button onClick={() => setDataLength(donate.length)} className="bg-[#009444] text-white px-5 py-2 font-semibold rounded">See All</button>
                </div>
            </div>
        </div>
    );
};

export default Donation;