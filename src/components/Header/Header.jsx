import { NavLink } from "react-router-dom";
import './Header.css';
const Header = () => {
    return (
        <div className="nav-container flex justify-between mx-2 mt-7">
            <img className="w-48" src="/Logo.png" alt="" />
            <nav className="flex nav-list">
                <ul>
                    <li className="ml-10 text-lg font-semibold">
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>
                            Home
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="ml-10 text-lg font-semibold">
                        <NavLink to="/donation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>
                            Donation
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="ml-10 text-lg font-semibold">
                        <NavLink to="/statics" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;