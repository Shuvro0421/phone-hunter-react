import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { user , logOut } = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(() =>{
            console.log('logged out')
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <div>
                <div className="flex justify-between shadow-lg bg-slate-300 text-red-600 font-semibold text-xl px-7 py-5 rounded-lg">

                    <NavLink className="text-3xl" to="/">Phone Shop</NavLink>
                    <div className="flex gap-4">
                        {
                            user && <div className='flex gap-4 items-center'>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/favorites">Favorites</NavLink>
                            </div>
                        }
                        
                        {
                            user ? 
                            <div className='flex gap-5 items-center'>
                                <p className='text-cyan-800'>{user.email}</p>
                                <p className='btn' onClick={handleLogOut}>Log Out</p>
                            </div>
                            :
                            <div className='flex items-center gap-5'>
                                <NavLink className="btn" to="/login">Login</NavLink>
                                <NavLink className="btn" to="/register">Register</NavLink>
                            </div>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;