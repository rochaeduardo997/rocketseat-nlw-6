import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequres {
  name: string,
  email: string,
  admin?: boolean,
  password: string
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequres) {
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

      const passwordHashed = await hash(password, 5);

      const user = userRepository.create({
        name, email, admin, password: passwordHashed
      });

      await userRepository.save(user);

      return user;
    } catch (err) {
      console.trace("Error at CreateUserService\n", err);
    }
  }
}

export { CreateUserService };