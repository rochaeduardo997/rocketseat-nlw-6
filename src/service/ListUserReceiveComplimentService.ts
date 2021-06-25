import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceiveComplimentsService {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentsRepositories.find({
      where: {
        user_receiver_id: user_id
      },
      relations: [
        "userSenderID",
        "userReceiverID",
        "tag"
      ]
    });

    return compliments;
  }
}

export { ListUserReceiveComplimentsService };