import { getCustomRepository } from "typeorm";

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequres {
  name: string,
  email: string,
  admin: boolean,
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequres) {
    try {
      const userRepository = getCustomRepository(UsersRepositories);

      if (!email) {
        throw new Error("Invalid email");
      }

      const userAlreadyExists = await userRepository.findOne({
        email
      });

      if (userAlreadyExists) {
        throw new Error("User already exists");
      }

      const user = userRepository.create({
        name, email, admin
      });

      await userRepository.save(user);

      return user;
    } catch (err) {
      console.trace("Error at CreateUserService\n", err);
    }
  }
}

export { CreateUserService };