import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className="flex justify-between mt-7">
            <img className="w-48" src="/Logo.png" alt="" />
            <nav className="flex">
                <ul>
                    <li className="ml-10 text-lg font-semibold">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="ml-10 text-lg font-semibold">
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="ml-10 text-lg font-semibold">
                        <NavLink
                            to="/statics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Statics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;