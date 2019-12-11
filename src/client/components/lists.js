import React, {useState, useEffect} from "react";
import "../assets/banksicons/bnp.png";
import "../assets/banksicons/belfius.png";
import "../assets/banksicons/axa.png";
import "../assets/banksicons/argenta.png";
import "../assets/banksicons/beobank.png";
import "../assets/banksicons/bkcp.png";
import "../assets/banksicons/cbc.png";
import "../assets/banksicons/bpost.jpg";
import "../assets/banksicons/crelan.png";
import "../assets/banksicons/deltalloyd.png";
import "../assets/banksicons/deutschebank.jpg";
import "../assets/banksicons/ing.jpg";
import "../assets/banksicons/kbc.png";
import "../assets/banksicons/keytrade.png";

function Lists() {
    const [usrLoc, setusrLoc] = useState();
    let [markersList, setmarkersList] = useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setusrLoc([position.coords.latitude, position.coords.longitude]);
            fetch(
                `/api/${position.coords.latitude}/${position.coords.longitude}`,
            ).then(dataJSON => {
                dataJSON.json().then(markers => {
                    markersList = markers;
                    setmarkersList(markersList);
                });
            });
        });
    }, []);

    return [
        markersList &&
            markersList.map(element => (
                // eslint-disable-next-line react/jsx-key
                <li style={{borderColor: `#${element.bankDetails[0].color}`}}>
                    <img
                        className={"logo-bank"}
                        src={`/assets/banksicons/${element.bankDetails[0].icon}`}
                    />
                    <a href={element.bankDetails[0].url}>
                        {element.bankDetails[0].name}
                    </a>
                    <p>{element.address}</p>
                </li>
            )),
    ];
}

export default Lists;
