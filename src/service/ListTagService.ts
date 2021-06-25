import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagRepositories";
import { classToPlain } from "class-transformer";

class ListTagService {
  async execute() {
    const tagRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagRepositories.find();

    return classToPlain(tags);
  }
}

export { ListTagService };