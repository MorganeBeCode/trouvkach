import React, {useState} from "react";
import Lists from "./lists";
import Research from "./research";
import "../assets/fleche.svg";

const ContainerLeft = () => {
    const [notDisplay, setDisplay] = useState(true);

    const handleClick = () => {
        setDisplay(!notDisplay);
    };

    if (notDisplay) {
        return (
            <div className={"container-left"}>
                <div className={"loading"} onClick={handleClick}>
                    <span>
                        <p>{"Search ATM"}</p>
                    </span>
                </div>
                <div className={"pig"} />
                <div className={"bulle"} />
            </div>
        );
    }
    return (
        <div className={"container-lists"}>
            <img
                onClick={handleClick}
                className={"return-arrow"}
                src={"../assets/fleche.svg"}
            />
            <Research />
            <ul>
                <Lists />
            </ul>
        </div>
    );
};

export default ContainerLeft;
