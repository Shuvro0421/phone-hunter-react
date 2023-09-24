import { useEffect } from "react";
import { useState } from "react";
import Phone from "../Phone/Phone";
import PhoneDetail from "../PhoneDetail/PhoneDetail";
import PhoneDetails from "../PhoneDetails/PhoneDetails";
import Swal from 'sweetalert2'


const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [noDataFound, setNoDataFound] = useState(false);
    const [isShowMore, setIsShowMore] = useState(false);
    const [totalPrice , setTotalPrice] = useState(0);

    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));
        if (favoriteItems) {
            setFavorites(favoriteItems);

            const total = favoriteItems.reduce((preValue , currentItem) => preValue + currentItem.price , 0);
            setTotalPrice(total);
        }
        else {
            console.log('No data found');
            setNoDataFound('No Data Found')
        }

    }, [])
    console.log(favorites);

    const handleRemove = () => {
        localStorage.clear();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Deleted All',
            showConfirmButton: false,
            timer: 1000
        })
        setFavorites([]);
        setNoDataFound("No Data Found")
    }

    return (
        <div>
            {
                noDataFound ? <p className="text-center my-40 font-semibold text-4xl text-red-600">{noDataFound}</p>
                    :
                    <div>
                        <div className="flex items-center justify-center text-red-600 text-4xl font-semibold mt-5">Total Price : ${totalPrice}</div>
                        {favorites.length > 0 && <div className="flex items-center justify-center mt-10"><button onClick={handleRemove} className="btn btn-warning text-white font-semibold">Delete All Button</button></div>}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
                            {
                                isShowMore ? favorites.map(phone => <Phone key={phone.id} phone={phone}></Phone>) :
                                    favorites.slice(0, 4).map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                            }
                        </div>
                        {
                            favorites.length > 4 && <div onClick={() => setIsShowMore(!isShowMore)} className="flex items-center justify-center mt-10"><button className="btn btn-error text-white font-semibold">{isShowMore ? 'See Less' : 'See More'}</button></div>
                        }
                    </div>
            }
        </div>
    );
};

export default Favorites;