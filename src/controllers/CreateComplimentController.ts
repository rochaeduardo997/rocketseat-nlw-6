import { Request, Response } from "express";
import { CreateComplimentService } from "../service/CreateComplimentService";

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_receiver_id, message } = request.body;
    const { user_id } = request;
    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      tag_id,
      user_sender_id: user_id,
      user_receiver_id,
      message
    });

    return response.status(200).json(compliment);
  }
}

export { CreateComplimentController };