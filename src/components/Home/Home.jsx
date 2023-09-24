import { useLoaderData } from "react-router-dom";
import PhoneBg from '../../assets/images/phonebg.png'
import Phone from "../Phone/Phone";


const Home = () => {
    const phones = useLoaderData();
    return (
        <div className="mt-5">
            {/* top image */}
            <div className="flex items-center justify-center relative">
                <img className=" rounded-lg" src={PhoneBg} alt="" />
                <div className="form-control flex flex-row absolute gap-1">
                    <input type="text" placeholder="Search" className="input border-none outline-none w-24 md:w-auto" />
                    <button className="btn btn-error text-white">search</button>
                </div>
            </div>
            <div className="mt-6">
                <h1 className="text-4xl font-semibold text-center text-red-600">Our Phone Collections</h1>
                <div className="mt-7 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                    {
                        phones.map((phone, idx) => <Phone key={idx} phone={phone}></Phone>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;