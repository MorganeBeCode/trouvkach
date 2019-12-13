/* eslint-disable no-undefined */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from "react";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import L from "leaflet";
import "../assets/pig.svg";
import "../assets/card.svg";
import "../assets/loupe.svg";

// const moneyIcon = new L.DivIcon({
//     html: `<img src="../assets/card.svg" style="width: 100%" />`,
//     iconSize: [60, 60],
//     popupAnchor: [-0.5, -5],
//     className: "",
// });
const usrIcon = new L.Icon({
    iconUrl: "../assets/pig.svg",
    iconSize: [100, 75],
    popupAnchor: [0, -10],
    className: "pigmap",
});

function positionSet(p_lat, p_lon) {
    return [p_lat, p_lon];
}

function LeafletMap() {
    const [usrLoc, setusrLoc] = useState([50.63, 5.58]);
    let [markersList, setmarkersList] = useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setusrLoc([position.coords.latitude, position.coords.longitude]);
        });
    }, []);

    useEffect(() => {
        fetch(`/api/${usrLoc[0]}/${usrLoc[1]}`).then(dataJSON => {
            dataJSON.json().then(markers => {
                markersList = markers;
                setmarkersList(markersList);
            });
        });
    }, [usrLoc]);

    function convertSvg(name) {
        let filter;
        if (name === "4a961d") {
            filter =
                "invert(44%) sepia(17%) saturate(2843%) hue-rotate(58deg) brightness(105%) contrast(77%)";
        }
        if (name === "0b2c81") {
            filter =
                "invert(12%) sepia(75%) saturate(2745%) hue-rotate(213deg) brightness(100%) contrast(96%)";
        }
        if (name === "C30045") {
            filter =
                "invert(13%) sepia(77%) saturate(5405%) hue-rotate(330deg) brightness(82%) contrast(107%)";
        }
        if (name === "003776") {
            filter =
                "invert(13%) sepia(79%) saturate(2624%) hue-rotate(197deg) brightness(99%) contrast(106%)";
        }
        if (name === "009639") {
            filter =
                "invert(34%) sepia(96%) saturate(1128%) hue-rotate(117deg) brightness(89%) contrast(101%)";
        }
        if (name === "02acef") {
            filter =
                "invert(52%) sepia(34%) saturate(2573%) hue-rotate(162deg) brightness(96%) contrast(99%)";
        }
        if (name === "02acef") {
            filter =
                "invert(52%) sepia(34%) saturate(2573%) hue-rotate(162deg) brightness(96%) contrast(99%)";
        }
        if (name === "002C52") {
            filter =
                "invert(7%) sepia(56%) saturate(7495%) hue-rotate(195deg) brightness(88%) contrast(101%)";
        }
        if (name === "009b7a") {
            filter =
                "invert(36%) sepia(93%) saturate(761%) hue-rotate(129deg) brightness(99%) contrast(100%)";
        }
        if (name === "FF7F00") {
            filter =
                "invert(68%) sepia(46%) saturate(6857%) hue-rotate(1deg) brightness(103%) contrast(106%)";
        }
        if (name === "10519b") {
            filter =
                "invert(20%) sepia(95%) saturate(1778%) hue-rotate(199deg) brightness(88%) contrast(89%)";
        }
        if (name === "009fda") {
            filter =
                "invert(49%) sepia(68%) saturate(3141%) hue-rotate(165deg) brightness(94%) contrast(101%)";
        }
        if (name === "003777") {
            filter =
                "invert(18%) sepia(30%) saturate(4451%) hue-rotate(196deg) brightness(90%) contrast(106%)";
        }
        if (name === "e20019") {
            filter =
                "invert(7%) sepia(93%) saturate(4687%) hue-rotate(336deg) brightness(137%) contrast(147%)";
        }

        return filter;
    }

    function convertInput() {
        const input = document.querySelector("#input").value;
        fetch(
            `https://nominatim.openstreetmap.org/search.php?q=${input}&format=json`,
        ).then(dataJSON => {
            dataJSON.json().then(data => {
                const response = data[0];
                if (response === undefined) {
                    navigator.geolocation.getCurrentPosition(position => {
                        setusrLoc([
                            position.coords.latitude,
                            position.coords.longitude,
                        ]);
                    });
                } else {
                    setusrLoc([response.lat, response.lon]);
                }
            });
        });
    }

    function handleInput(event) {
        event.preventDefault();
        convertInput();
    }

    if (!markersList) {
        return (
            <div className={"load"}>
                <div id={"text"}>
                    <h1>{"Loading"}</h1>
                </div>
            </div>
        );
    }

    return (
        <div>
            <form onSubmit={handleInput} id={"form"}>
                <input
                    id={"input"}
                    type={"text"}
                    placeholder={"Type your address to find the closest ATM"}
                    // value={"input"}
                />
                <button type={"submit"}>
                    <img
                        src={"../assets/loupe.svg"}
                        width={"24px"}
                        height={"auto"}
                    />
                </button>
            </form>
            <div className={"map"}>
                <Map style={{height: "80vh"}} center={usrLoc} zoom={15}>
                    <TileLayer
                        url={
                            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        }
                        attribution={
                            ' <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        }
                    />
                    <Marker position={usrLoc} icon={usrIcon}>
                        <Popup>{<h3>{"I'm here."}</h3>}</Popup>
                    </Marker>
                    {markersList.map(element => (
                        <Marker
                            key={element._id}
                            position={positionSet(
                                element.latitude,
                                element.longitude,
                            )}
                            icon={
                                new L.DivIcon({
                                    html: `<img src="../assets/card.svg" style="width: 100%; filter: ${convertSvg(
                                        element.bankDetails[0].color,
                                    )};" />`,
                                    iconSize: [60, 60],
                                    popupAnchor: [-0.5, -5],
                                    className: "",
                                })
                            }>
                            <Popup>
                                {
                                    <div id={"center"}>
                                        <div>
                                            <h3
                                                style={{
                                                    borderColor: `#${element.bankDetails[0].color}`,
                                                }}>
                                                {element.bankDetails[0].name}
                                                {" ("}
                                                {element.bankDetails[0].country}
                                                {")"}
                                            </h3>
                                            <p>
                                                <b>{"Address: "}</b>
                                                {element.address}
                                            </p>
                                            <b>{"Website: "}</b>
                                            <a
                                                href={
                                                    element.bankDetails[0].url
                                                }
                                                target={"blank"}>
                                                {element.bankDetails[0].url}
                                            </a>
                                        </div>
                                        <div className={"buttons"}>
                                            <a
                                                href={`http://google.be/maps/dir/${usrLoc}/${element.latitude},${element.longitude}`}
                                                target={"_blank"}>
                                                {"GO"}
                                            </a>
                                            <button type={"button"}>
                                                {"Request Deletion"}
                                            </button>
                                        </div>
                                    </div>
                                }
                            </Popup>
                        </Marker>
                    ))}
                </Map>
            </div>
        </div>
    );
}
export default LeafletMap;
