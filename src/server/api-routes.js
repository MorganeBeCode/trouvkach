// const mongoClient = require("mongodb").MongoClient; // création d'une nouvelle instance MongoClient
// const router = require("express").Router(); // création d'un objet Router pour accéder method HTTP ("GET", principalement)
// const mongoUrl = "mongodb://dev:dev@localhost:27017/";

// // avec .connect, en cas de réussite, database est appélée en callback.

// mongoClient.connect(mongoUrl, (err, database) => {
//     if (err) {
//         console.error("An error occurred connecting to MongoDB: ", err);
//     } else {
//         const db = database;
//         const terminals = database.collection("terminals");
//         router.get("/", (req, res) => {
//             // req = objet request et res = objet response
//             res.json({
//                 // récupère la réponse sous format JSON
//                 status: 200,
//                 message: "Connected to trouvkach",
//             });
//         });

//         router.get("/:latitude/:longitude", (req, res) => {
//             terminals
//                 .aggregate([
//                     {
//                         // req.params récupère latitude et longitude enovoyées depuis le router
//                         // Dans terminals, match va permettre de cibler chaque latitude et longitude
//                         // On rajouter deux propriétés $gte (décrémentée) et $lte (incrémentée) sur la request (avant response)

//                         $match: {
//                             latitude: {
//                                 $gte: Number(req.params.latitude) - 0.1,
//                                 $lte: Number(req.params.latitude) + 0.1,
//                             },
//                             longitude: {
//                                 $gte: Number(req.params.longitude) - 0.2,
//                                 $lte: Number(req.params.longitude) + 0.2,
//                             },
//                         },
//                     },
//                     {
//                         // Les deux collections "terminals" et "bank" ont un id commun. Pour l'un est attaché à la propriété "bank" (terminals), pour l'autre à la propriété "-id" (bank).
//                         // Look up, va joindre la collection banks à la collection terminals en créant un tableau appelé bankDetails

//                         $lookup: {
//                             from: "banks", // collection à joindre
//                             localField: "bank", // champ dans les documents de la collection de départ
//                             foreignField: "_id", // champ dans les documents de la collection à joindre
//                             as: "bankDetails", //  nom du tableau qui sera ajouté aux documents du jeu de résultat
//                         },
//                     },
//                 ])
//                 // cette méthode vient de cursor.toArray() et cursor = résultat obtenu par request
//                 .toArray((err5, item) => {
//                     // LATITUDE //
//                     const latitude = Number(req.params.latitude);
//                     const ratioLat =
//                         Math.cos((req.params.latitude * Math.PI) / 180) * 111;
//                     const tenKmLat = (1 / ratioLat) * 0.75;
//                     const minLat = latitude - tenKmLat;
//                     const maxLat = latitude + tenKmLat;

//                     // LONGITUDE //
//                     const longitude = Number(req.params.longitude);
//                     const ratioLong =
//                         Math.cos((req.params.longitude * Math.PI) / 180) * 85;
//                     const tenKmLong = (1 / ratioLong) * 1.5;
//                     const minLong = longitude - tenKmLong;
//                     const maxLong = longitude + tenKmLong;
//                     const result = [];

//                     // FOR LOOP ON TERMINALS ARRAY //
//                     item.forEach((el, index) => {
//                         if (
//                             Object.getOwnPropertyNames(el.bankDetails).length <=
//                             1
//                         ) {
//                             el.bankDetails = [{}];
//                             el.bankDetails[0].country = "N/A";
//                         }
//                         if (
//                             el.latitude > minLat &&
//                             el.latitude < maxLat &&
//                             (el.longitude > minLong && el.longitude < maxLong)
//                         ) {
//                             result.push(el);
//                         }
//                         index === item.length - 1 && res.json(result);
//                     });
//                 });
//         });
//     }
// });

// module.exports = router;
