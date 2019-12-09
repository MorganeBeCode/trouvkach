import React from "react";

const Research = () => {
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     const researchUser = {input};
    //     // utiliser le input dans un find() de l'objet API
    // };
    return (
        // onSubmit={handleSubmit} (à insérer dans balise forme)
        <form>
            <input
                type={"text"}
                placeholder={"Research an ATM"}
                // value={"input"}
            />
            <button type={"submit"}>
                <img
                    src={"https://svgsilh.com/svg/1093184-00bcd4.svg"}
                    width={"24px"}
                    height={"auto"}
                />
            </button>
        </form>
    );
};

export default Research;
