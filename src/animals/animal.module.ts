import { Module } from "@nestjs/common";
import { AnimalService } from "./animal.service";
import AnimalResolver from "./animal.resolver";

@Module({ providers: [AnimalService, AnimalResolver] })
export class AnimalModule {}
