import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export default class AnimalArgs {
  @Field((type) => Int)
  skip = 0;

  @Field((type) => Int)
  take = 10;
}
