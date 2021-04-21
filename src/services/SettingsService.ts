import { getCustomRepository, Repository } from "typeorm";
import { Settings } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
    chat: boolean;
    username: string;
}

class SettingsService {

    private settingsRepository: Repository<Settings>;

    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    async create({ chat, username } : ISettingsCreate) {

        //Select * from settings where username = "username" limit 1;
        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        })

        if (userAlreadyExists) {
            throw new Error("Usuário já existe, por favor cadastre outro!");
        }

        const settings = this.settingsRepository.create({
            chat,
            username
        });

        await this.settingsRepository.save(settings);
        return settings;
    }
}

export { SettingsService }