/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React, { useState } from "react";
// import Map from "./map";
import LeafletMap from "./leaflet-map";

const Home = () => {
    const [notReady, setReady] = useState(true);

    // const pageTransition = () => {
    //     const propPig = useRef(null);
    //     const propHomePage = useRef(null);
    //     const propBulle = useRef(null);
    //     propPig.classList.add("translate");
    //     propBulle.classList.add("translate");
    //     propHomePage.classList.add("fade-out");
    // };

    const handleClick = () => {
        setReady(false);
        // pageTransition();
    };

    if (notReady) {
        return (
            <div className={"home-page"}>
                <h1>{"TroufKash"}</h1>
                <h2>{"Want to withdraw money?"}</h2>
                <p>
                    {
                        "Click on the card to discover the ATM's location in Liège"
                    }
                </p>
                <div className={"bulle"}></div>
                <div className={"pig"}></div>
                <div className={"route"}></div>
                <div className={"by"}>
                    <p>{"By Bonnie and Clyde"}</p>
                </div>

                <div className={"loading-ext"} onClick={handleClick}>
                    <div className={"loading-int"}>
                        <span>
                            <img
                                className={"marker"}
                                src={
                                    "https://svgsilh.com/svg/1971129-673ab7.svg"
                                }
                            />
                            <img
                                className={"card"}
                                src={
                                    "https://svgsilh.com/svg/1300155-673ab7.svg"
                                }
                            />
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    return <LeafletMap />;
};

export default Home;
