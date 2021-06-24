import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateReques {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateReques) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userExists = await usersRepositories.findOne({
      email
    });

    if (!userExists) {
      throw new Error("Email/password incorrect");
    }

    const passwordMatch = await compare(password, userExists.password);

    if (!passwordMatch) {
      throw new Error("Email/password incorrect");
    }

    const token = sign({
      email: userExists.email
    }, "thisisasecret", {
      subject: userExists.id,
      expiresIn: "1d"
    });

    return token;
  }
}

export { AuthenticateUserService };