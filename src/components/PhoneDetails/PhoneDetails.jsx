import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneDetail from "../PhoneDetail/PhoneDetail";

const PhoneDetails = () => {
    const [phone , setPhones] = useState({});

    const {id} = useParams();
    const phones = useLoaderData();

    useEffect(() =>{

        const findPhone = phones.find(phone => phone.id === id)
        setPhones(findPhone);

    } , [id , phones])

    return (
        <div>
            <PhoneDetail phone={phone}></PhoneDetail>
        </div>
    );
};

export default PhoneDetails;