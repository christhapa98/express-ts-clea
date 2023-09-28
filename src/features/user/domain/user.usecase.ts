import { injectable } from "tsyringe";
import { UserLogin } from "./interface/user.interface";
import { UserLoginResponse } from "./interface/user.response";
import { UserRepository } from "../entity/repository/user.repository";
import { User } from "../entity/user";

@injectable()
export class UserUseCase {
  constructor(private userRepository: UserRepository) {}
  async login(payload: UserLogin): Promise<any> {
    const user: User | null = await this.userRepository.findByEmail(
      payload.email
    );
    return user;
  }

  async register(payload: any): Promise<any> {
    const registeredUser: any = await this.userRepository.create(payload);
    return registeredUser;
  }
}
