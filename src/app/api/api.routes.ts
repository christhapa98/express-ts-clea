import express from "express";
import UserRoutes from "../../features/user/presentation/user.route";
import { container } from "tsyringe";

const apiRouter = express.Router();
export const userRoutes = container.resolve(UserRoutes);

apiRouter.use("/user", userRoutes.routes());

export default apiRouter;
