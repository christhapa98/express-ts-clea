import { injectable } from "tsyringe";
import { DBCrudBaseRepository } from "../../../../core/base/db/db.crud.base.repository";
import UserModel, { User } from "../user";

@injectable()
export class UserRepository extends DBCrudBaseRepository<User> {
  async findByEmail(email: string): Promise<User | null> {
    try {
      const doc = await UserModel.findOne({ email: email });
      return doc;
    } catch (error) {
      throw error;
    }
  }
}
