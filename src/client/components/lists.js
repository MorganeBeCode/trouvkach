/* eslint-disable no-undefined */
import React, {useState, useEffect} from "react";
import "../assets/banksicons/bnp.png";
import "../assets/banksicons/belfius.png";
import "../assets/banksicons/axa.png";
import "../assets/banksicons/argenta.png";
import "../assets/banksicons/beobank.png";
import "../assets/banksicons/bkcp.png";
import "../assets/banksicons/cbc.png";
import "../assets/banksicons/bpost.png";
import "../assets/banksicons/crelan.png";
import "../assets/banksicons/deltalloyd.png";
import "../assets/banksicons/deutschebank.png";
import "../assets/banksicons/ing.png";
import "../assets/banksicons/kbc.png";
import "../assets/banksicons/keytrade.png";

function Lists() {
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

    document.querySelector("#form").addEventListener("submit", e => {
        const inputBis = e.target.querySelector("#input").value;
        fetch(
            `https://nominatim.openstreetmap.org/search.php?q=${inputBis}&format=json`,
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
    });

    return [
        markersList &&
            markersList.map(element => (
                // eslint-disable-next-line react/jsx-key
                <li
                    key={element._id}
                    style={{borderColor: `#${element.bankDetails[0].color}`}}>
                    <img
                        className={"logo-bank"}
                        src={`/assets/banksicons/${element.bankDetails[0].icon}`}
                    />
                    <a href={element.bankDetails[0].url} target={"blank"}>
                        {element.bankDetails[0].name}
                    </a>
                    <p>{element.address}</p>
                </li>
            )),
    ];
}

export default Lists;
