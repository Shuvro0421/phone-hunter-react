import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <div className="flex justify-between shadow-lg bg-slate-300 text-red-600 font-semibold text-xl px-7 py-5 rounded-lg">

                    <NavLink className="text-3xl" to="/">Phone Shop</NavLink>
                    <div className="flex gap-4">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/favorites">Favorites</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;