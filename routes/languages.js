import { Router } from "express";
import { LanguageController } from "../controllers/language.js";

export const languagesRouter = Router();

languagesRouter.get("/", LanguageController.getAll);
languagesRouter.post("/", LanguageController.create);

languagesRouter.get("/:id", LanguageController.getById);
languagesRouter.patch("/:id", LanguageController.update);
languagesRouter.delete("/:id", LanguageController.delete);
