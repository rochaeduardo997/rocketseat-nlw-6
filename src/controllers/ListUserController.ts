import { Request, Response } from "express";
import { ListUserService } from "../service/ListUsersSerivce";

class ListUsercontroller {
  async handle(request: Request, response: Response) {
    const listUserSerivce = new ListUserService();

    const users = await listUserSerivce.execute();

    return response.json(users);
  }
}

export { ListUsercontroller };