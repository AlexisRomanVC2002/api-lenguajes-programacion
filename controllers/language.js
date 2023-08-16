import {
  validateLanguage,
  validatePartialLanguage,
} from "../schemas/languages.js";
import { LanguageModel } from "../models/language.js";

export class LanguageController {
  static async getAll(req, res) {
    const { paradigm, name } = req.query;

    if (paradigm && name)
      return res
        .status(400)
        .json({ message: "La sintaxis de la consulta es incorrecta." });

    const languages = await LanguageModel.getAll({ paradigm, name });

    if (languages) return res.json(languages);

    res.status(404).json("Lenguaje no encontrado.");
  }

  static async getById(req, res) {
    const { id } = req.params;
    const language = await LanguageModel.getById({ id });

    if (!language)
      return res.status(404).json({ message: "Lenguaje no encontrado." });

    res.json(language);
  }

  static async create(req, res) {
    const result = validateLanguage(req.body);

    if (!result.success) return res.status(400).json(result.error);

    const newLanguage = await LanguageModel.create({ input: result.data });

    return res.status(201).json(newLanguage);
  }

  static async update(req, res) {
    const result = validatePartialLanguage(req.body);

    if (!result.success) return res.status(400).json(result.error);

    const { id } = req.params;
    const languageUpdated = await LanguageModel.update({
      id,
      input: result.data,
    });

    if (!languageUpdated)
      return res.status(404).json({ message: "Lenguaje no encontrado." });

    return res.status(201).json(languageUpdated);
  }

  static async delete(req, res) {
    const { id } = req.params;

    let isDeleted = await LanguageModel.delete({ id });

    if (!isDeleted)
      return res.status(404).json({ message: "Lenguaje no encontrado." });

    res.status(200).json({ message: "Lenguaje eliminado." });
  }
}
