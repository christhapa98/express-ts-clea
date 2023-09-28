import express, { Router } from "express";
import { UserController } from "../domain/user.adapter";
import { injectable } from "tsyringe";

@injectable()
class UserRoutes {
  constructor(private userController: UserController) {}
  routes() {
    const router = express.Router();
    router.post(
      "/create",
      this.userController.register.bind(this.userController)
    );
    router.post("/login", this.userController.login.bind(this.userController));
    return router;
  }
}

export default UserRoutes;
