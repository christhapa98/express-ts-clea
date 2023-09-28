import "reflect-metadata";
import { container } from "tsyringe";
import express, { Express } from "express";
import cors from "cors";

import connectDB from "./config/db/connect";
import apiRouter from "./api/api.routes";
import UserRoutes from "../features/user/presentation/user.route";
import { UserController } from "../features/user/domain/user.adapter";
import { UserUseCase } from "../features/user/domain/user.usecase";
import { UserRepository } from "../features/user/entity/repository/user.repository";

const app: Express = express();
const port: number | string = 420;

app.use(cors());
app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static("public"));

app.use("/api/v1", apiRouter);

container.register("UserRoutes", { useClass: UserRoutes });
container.register("UserController", { useClass: UserController });
container.register("UserUseCase", { useClass: UserUseCase });
container.register("UserRepository", { useValue: UserRepository });
const onInit = async () => {
  try {
    await connectDB("mongodb://127.0.0.1:27017/store");
    console.log("Welcome to Store Core DB");
    console.log("Server running on port " + port);
  } catch (error: any) {
    throw Error(error);
  }
};

export const start = () => app.listen(port, onInit);
