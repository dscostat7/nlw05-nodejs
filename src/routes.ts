import { request, response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

/**
 * Tipos de parametros
 * 
 * Rutes Params => Parametros de rotas
 * http://localhost:3333/settings/1
 * 
 * Query Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa&
 * 
 * Body Params => {
 * 
 * }
 */


routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);

routes.get("/messages/:id", messagesController.showByUser);

export { routes };