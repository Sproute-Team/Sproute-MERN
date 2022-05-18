import React from "react";
import Navbar from "./Components/Navbar";
import "./Landing.css";
import LogoName from "./images/sproutename.png"
import ReactIcons from "react-icons"
import LeftBar from "./Components/Leftbar";
import Middlemain from "./Components/Middlemain";


function Landing() {
    return (
        <>
            <div className="main overflow-hidden">
                <div className="nav h-24 flex">
                    <div className="">
                        <img className="h-24" src={LogoName}/>
                    </div>
                    <Navbar />
                    <LeftBar />
                </div>
                <div className="main-down">
                    <Middlemain />
                </div>
            </div>
        </>
    );
}

export default Landing;