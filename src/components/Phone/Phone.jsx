
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { AiFillStar , AiOutlineStar } from "react-icons/ai";

const Phone = ({ phone }) => {
    const { id, image, rating, brand_name, phone_name, price } = phone || {};
    return (
        <div className="flex  flex-col bg-base rounded-lg shadow-xl p-3 space-y-3">
            <div className="flex flex-grow items-center justify-center">
                <img className="w-2/3 rounded-lg" src={image} alt={phone_name} />
            </div>
            {/* rating */}
            <div className="">
                <Rating className="text-red-500 text-xl" emptySymbol={<AiOutlineStar></AiOutlineStar>}
                    fullSymbol={<AiFillStar></AiFillStar>}
                    initialRating={rating}
                    readonly
                />
            </div>
            <div className="space-y-2">
                <h2 className=" bg-cyan-200 p-1 rounded-lg text-red-500">{brand_name}</h2>
                <div className="flex  justify-between font-semibold text-lg">
                    <p>{brand_name}</p>
                    <p>${price}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/phones/${id}`} className="w-full btn btn-error text-white"><button>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Phone;