import React, {useState} from "react";
import Lists from "./lists";
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
                <div className={"bounce"}>
                    <div className={"pig"} onClick={handleClick} />
                    <div className={"bulle"} />
                </div>
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
            <ul>
                <Lists />
            </ul>
        </div>
    );
};

export default ContainerLeft;
