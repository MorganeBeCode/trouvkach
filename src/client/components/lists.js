import React from "react";

const Lists = () => {
    return (
        <div>
            <li>
                <img
                    className={"logo-bank"}
                    src={
                        "https://upload.wikimedia.org/wikipedia/fr/d/d2/Logo_ING.svg"
                    }
                />
                <a href={"https://www.ing.be/en/retail"}>ING</a>
                <p>Rue Puits-en-Sock 1 - 4000 Liège</p>
            </li>
            <li>
                <img
                    className={"logo-bank"}
                    src={
                        "https://upload.wikimedia.org/wikipedia/fr/thumb/3/39/BNP_Paribas_2007.svg/206px-BNP_Paribas_2007.svg.png"
                    }
                />
                <a
                    href={
                        "https://www.bnpparibasfortis.be/fr/Public/Connexion?axes4=priv"
                    }>
                    BNP Paribas Fortis
                </a>
                <p>Place Xavier-Neujean 8/10 - 4000 Liège</p>
            </li>
            <li>
                <img
                    className={"logo-bank"}
                    src={
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Belfius.svg/1280px-Belfius.svg.png"
                    }
                />
                <a
                    href={
                        "https://www.belfius.be/retail/fr/produits/assurance/vehicules/assurance-auto/index.aspx?&extc=seavauto&extch=pkw&extfor=brandcore&extsit=google&extseg=brd&kw=belfius&extmtype=e&extcrea=360443117940&exttid=kwd-36839279448&extd=c&extdm=&offer=IsCa02C320&dummy=x"
                    }>
                    Belfius
                </a>
                <p>Rue Grétry 67 - 4000 Liège</p>
            </li>
        </div>
    );
};

export default Lists;

// à modifier pour remplacer le code dur.

// return(
//     <li>
//         <img src = {details.icon}></img>
//         <a href = {details.url}>{details.name}</a>
//         {details.address}
//     </li>
// )
