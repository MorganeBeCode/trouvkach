import React, {useState} from "react";
import Lists from "./lists";
import Research from "./research";

const ContainerLeft = () => {
    const [notDisplay, setDisplay] = useState(true);
    // const [Terminals, setTerminals] = useState([
    //     {mongodb.connect()}
    // ])
    const handleClick = () => {
        setDisplay(false);
    };
    if (notDisplay) {
        return (
            <div className={"container-left"}>
                <div className={"loading"} onClick={handleClick}>
                    <span>
                        <p>{"Search ATM"}</p>
                    </span>
                </div>
            </div>
        );
    }
    return (
        <div className={"container-lists"}>
            <Research />
            <ul>
                <Lists />
                {/* {Terminals.map(terminal => (
                    <Lists key={terminal.id} details={terminal} />
                ))} */}
            </ul>
        </div>
    );
};

export default ContainerLeft;
