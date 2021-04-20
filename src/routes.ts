import { request, response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controllers/SettingsController";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

const settingsController = new SettingsController();


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

export { routes };