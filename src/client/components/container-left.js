import React, {useState} from "react";
import Lists from "./lists";
import Research from "./research";

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
                src={"https://svgsilh.com/svg/1293400-e91e63.svg"}
            />
            <Research />
            <ul>
                <Lists />
            </ul>
        </div>
    );
};

export default ContainerLeft;
