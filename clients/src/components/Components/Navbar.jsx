import React from "react";
import { ImSearch} from "react-icons/im"
import {IoNotifications} from "react-icons/io5"
import EdmondPic from "../images/Maskgroup.png"

const Navbar = () => {
    return (
        <>
        <div className="mx-auto">
            <li>Home</li>
            <li>Services</li>
            <li>Orders</li>
        </div>
        <div className="inline-flex">
            <li><ImSearch /></li>
            <li><IoNotifications /></li>
            <li>Edmond</li>
            <li><img src={`${EdmondPic}`} className="w-10" /></li>
        </div>
        </>
    )
}
export default Navbar;