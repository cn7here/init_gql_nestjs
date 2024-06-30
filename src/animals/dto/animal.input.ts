import { Field, ID, InputType } from "@nestjs/graphql";
import Animal from "../animal.entity";

@InputType({ description: "create Animal Input" })
export default class AnimalInput implements Animal {
  @Field((type) => ID)
  id: number;

  @Field((type) => String)
  lived?: string;

  @Field((type) => String)
  name_animal?: string;
}
