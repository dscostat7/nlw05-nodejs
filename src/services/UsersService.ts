import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {
    private usersRepository: Repository<User>;
    
    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }
    
    async create(email: string) {

        // Verificar se o usuário existe, se não existir, salvar no banco de dados;

        const userExists = await this.usersRepository.findOne({
            email
        })
        if (userExists) {
            return userExists;
        }

        const user = this.usersRepository.create({
            email,
        })

        await this.usersRepository.save(user);

        // Caso exista, apenas retornar o user;

        return user;
    }

}
export { UsersService }