import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "animal" })
export default class Animal {
  @Field((_type) => ID, { nullable: false })
  id: number;

  @Field({ nullable: true })
  name_animal?: string;

  @Field({ nullable: true })
  lived?: string;
}
