import React, {useState} from "react";
import ContainerLeft from "./container-left";
import ContainerRight from "./container-right";

const Map = () => {
    const [] = useState();
    return (
        <div className={"map-page"}>
            <ContainerLeft />
            <ContainerRight />
        </div>
    );
};

export default Map;
