import React, {useState} from "react";
import Map from "./map";
import "../assets/cardpurple.svg";
import "../assets/marker.svg";
import "../assets/bulle.svg";

const Home = () => {
    const [notReady, setReady] = useState(true);

    const handleClick = () => {
        setReady(false);
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
                <div className={"bulle"} />
                <div className={"pig"} />
                <div className={"route"} />
                <div className={"by"}>
                    <p>{"By Bonnie and Clyde"}</p>
                </div>

                <div className={"loading-ext"} onClick={handleClick}>
                    <div className={"loading-int"}>
                        <span>
                            <img
                                className={"marker"}
                                src={"../assets/marker.svg"}
                            />
                            <img
                                className={"card"}
                                src={"../assets/cardpurple.svg"}
                            />
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    return <Map />;
};

export default Home;
