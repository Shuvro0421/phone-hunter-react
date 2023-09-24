import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="m-4">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;