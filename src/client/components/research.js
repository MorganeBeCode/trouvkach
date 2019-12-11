import React from "react";
import "../assets/loupe.svg";

const Research = () => (
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     const researchUser = {input};
    //     // utiliser le input dans un find() de l'objet API
    // };
    // onSubmit={handleSubmit} (à insérer dans balise forme)
    <form>
        <input
            type={"text"}
            placeholder={"Research an ATM"}
            // value={"input"}
        />
        <button type={"submit"}>
            <img src={"../assets/loupe.svg"} width={"24px"} height={"auto"} />
        </button>
    </form>
);
export default Research;
