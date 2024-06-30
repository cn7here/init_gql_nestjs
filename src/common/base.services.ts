import Animal from "src/animals/animal.entity";

export default interface IBaseService<T> {
  findAll(filters: any): Promise<T[]>;

  findOne(id: number): Promise<T>;

  create(item: Animal): Promise<T>;
}
