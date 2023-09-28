import { Request, Response } from "express";

import { UserUseCase } from "./user.usecase";
import { injectable } from "tsyringe";

import { UserLogin } from "./interface/user.interface";
import { UserLoginResponse } from "./interface/user.response";

@injectable()
export class UserController {
  constructor(private userUseCase: UserUseCase) {}
  async login(req: Request, res: Response) {
    const loginData: UserLogin | null = req.body;
    const loginResponse: UserLoginResponse = await this.userUseCase.login(
      loginData!
    );
    res.status(200).json(loginResponse);
  }

  async register(req: Request, res: Response) {
    const signupData: any = req.body;
    const signupResponse = await this.userUseCase.register(signupData);
    res.status(200).json(signupResponse);
  }
}
