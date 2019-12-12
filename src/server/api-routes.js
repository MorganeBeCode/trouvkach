/* eslint-disable no-console */
const mongo = require("mongodb").MongoClient; // création d'un objet Router pour accéder method HTTP ("GET", principalement)
const router = require("express").Router();
const url =
    "mongodb+srv://dev:dev@trouvkash-3px3t.mongodb.net/test?retryWrites=true&w=majority";

// avec .connect, en cas de réussite, database est appélée en callback.

mongo.connect(url, (err, client) => {
    if (err) {
        console.error("An error occurred connecting to MongoDB: ", err);
    } else {
        const db = client.db("trouvkash");
        const terminals = db.collection("terminals");
        const banks = db.collection("banks");

        router.get("/", (req, res) => {
            res.json({
                status: "API Working!",
                message: "Welcome to TrouvKash! May the pig be with you. ",
            });
        });

        router.get("/banks", (req, res) => {
            banks.find({}).toArray((e, banksArray) => {
                res.send({
                    banksArray,
                });
            });
        });

        router.get("/terminals", (req, res) => {
            terminals.find({}).toArray((e, terminalsArray) => {
                res.send({
                    terminalsArray,
                });
            });
        });

        router.get("/:latitude/:longitude", (req, res) => {
            terminals
                .aggregate([
                    {
                        // Les deux collections "terminals" et "bank" ont un id commun. Pour l'un est attaché à la propriété "bank" (terminals), pour l'autre à la propriété "-id" (bank).
                        // Look up, va joindre la collection banks à la collection terminals en créant un tableau appelé bankDetails
                        $lookup: {
                            from: "banks", // collection à joindre
                            localField: "bank", // champ dans les documents de la collection de départ
                            foreignField: "_id", // champ dans les documents de la collection à joindre
                            as: "bankDetails", //  nom du tableau qui sera ajouté aux documents du jeu de résultat
                        },
                    },
                    // cette méthode vient de cursor.toArray() et cursor = résultat obtenu par request
                ])
                .toArray((err2, item) => {
                    // LATITUDE //
                    const latitude = Number(req.params.latitude);
                    const ratioLat =
                        Math.cos((req.params.latitude * Math.PI) / 180) * 111;
                    const tenKmLat = (1 / ratioLat) * 0.75;
                    const minLat = latitude - tenKmLat;
                    const maxLat = latitude + tenKmLat;

                    // LONGITUDE //
                    const longitude = Number(req.params.longitude);
                    const ratioLong =
                        Math.cos((req.params.longitude * Math.PI) / 180) * 85;
                    const tenKmLong = (1 / ratioLong) * 1.5;
                    const minLong = longitude - tenKmLong;
                    const maxLong = longitude + tenKmLong;
                    const result = [];

                    // FOR LOOP ON TERMINALS ARRAY //
                    item.forEach((el, index) => {
                        if (
                            Object.getOwnPropertyNames(el.bankDetails).length <=
                            1
                        ) {
                            el.bankDetails = [{}];
                            el.bankDetails[0].country = "N/A";
                        }
                        if (
                            el.latitude > minLat &&
                            el.latitude < maxLat &&
                            (el.longitude > minLong && el.longitude < maxLong)
                        ) {
                            result.push(el);
                        }
                        if (index === item.length - 1) {
                            res.json(result);
                        }
                    });
                });
        });
    }
});

module.exports = router;
