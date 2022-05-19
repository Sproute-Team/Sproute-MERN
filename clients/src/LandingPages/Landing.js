import React from "react";
import Navbar from "../components/Components/Navbar";
import LogoName from "../components/images/sproutename.png"
// import LeftBar from "../components/Components/Leftbar";
import Middlemain from "../components/Components/Middlemain";
import "./Landing.css";
function Landing() {
    return (
        <>
            <div className="main overflow-hidden">
                <div className="nav h-24 flex">
                        {/* <img className="h-24" src={LogoName}/> */}
                    <Navbar />
                </div>
                <div className="main-down">
                    <Middlemain />
                </div>
            </div>
        </>
    );
}

export default Landing;