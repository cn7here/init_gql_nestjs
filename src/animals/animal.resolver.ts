import { Args, Query, Resolver } from "@nestjs/graphql";
import Animal from "./animal.entity";
import AnimalArgs from "./dto/animal.args";
import { AnimalService } from "./animal.service";
import AnimalInput from "./dto/animal.input";

@Resolver()
export default class AnimalResolver {
  constructor(private readonly animalService: AnimalService) {}

  @Query((_type) => [Animal])
  async getAnimals(@Args("filter") filter: AnimalArgs): Promise<Animal[]> {
    const result = await this.animalService.findAll(filter);

    return result;
  }

  @Query((_type) => Animal)
  async getAnimal(@Args("id") id: number): Promise<Animal> {
    return await this.animalService.findOne(id);
  }

  @Query((_type) => Animal)
  async createAnimal(@Args("input") input: AnimalInput): Promise<Animal> {
    return await this.animalService.create(input);
  }
}
