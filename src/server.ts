import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

// /**
//  * GET = Buscas
//  * POST = Criação
//  * PUT = Açteração
//  * DELETE = Deletar
//  * PATCH = Alterar uma informação específica
//  */

// // app.get("/", (request, response) => {
// //     return response.send("Olá NLW 05");
// // }); // Trabalhando com rota

// app.get("/", (request, response) => {
//     return response.json({
//         message: "Olá NLW 05",
//     });
// }); // Trabalhando com método json

// app.post("/", (request, response) => {
//     return response.json({ message: "Usuário salvo com sucesso!"});
// });

http.listen(3333, () => console.log("Server is running on port 3333"));

