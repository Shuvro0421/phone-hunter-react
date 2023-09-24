
import Swal from 'sweetalert2'
const PhoneDetail = ({ phone }) => {
    const { id, image, brand_name, phone_name } = phone || {};
    const handleAddToFavorites = () => {
        const addedFavoritesArray = [];
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));
        // when there is nothing tokhon if er vitor dhukau
        if (!favoriteItems) {
            addedFavoritesArray.push(phone);
            localStorage.setItem('favorites', JSON.stringify(addedFavoritesArray))
        }
        else {

            const isExists = favoriteItems.find(phone => phone.id === id);

            if (!isExists) {

                addedFavoritesArray.push(...favoriteItems, phone);
                localStorage.setItem('favorites', JSON.stringify(addedFavoritesArray))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Added to Favorites',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Already Added',
                  })
            }


        }

    }
    return (
        <div className="flex md:flex-row flex-col justify-center items-center my-28">
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4  block font-sans text-2xl font-bold uppercase leading-relaxed tracking-normal text-red-500 antialiased">
                        {brand_name}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {phone_name}
                    </h4>
                    <a className="inline-block" href="#">
                        <button onClick={handleAddToFavorites}
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Add To Favorites
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetail;