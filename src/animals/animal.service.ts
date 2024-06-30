import { Injectable } from "@nestjs/common";
import Animal from "./animal.entity";
import IBaseService from "src/common/base.services";

@Injectable()
export class AnimalService implements IBaseService<Animal> {
  async findAll(filters: any): Promise<Animal[]> {
    return MOCK_DATA;
  }

  async findOne(id: number): Promise<Animal> {
    const animal = MOCK_DATA.find((x) => x.id === id);
    return animal;
  }

  async create(item: Animal): Promise<Animal> {
    return item;
  }
}

const MOCK_DATA: Animal[] = [
  { id: 1, name_animal: "Doggy", lived: "Ke Bang" },
  { id: 2, name_animal: "Bird", lived: "Da Huong" },
];
