import { readJSON } from "../utils/getJson.js";
import crypto from "node:crypto";

const LANGUAGES_JSON = readJSON("../mocks/languages.json");

export class LanguageModel {
  static async getAll({ paradigm, name }) {
    let languages = LANGUAGES_JSON;

    if (paradigm) {
      languages = LANGUAGES_JSON.filter((language) =>
        language.paradigms.some(
          (p) => p.toLowerCase() === paradigm.toLocaleLowerCase()
        )
      );
    } else if (name) {
      languages = LANGUAGES_JSON.filter(
        (language) => language.name.toLowerCase() === name.toLowerCase()
      );
    }

    return languages;
  }

  static async getById({ id }) {
    const language = LANGUAGES_JSON.find((language) => language.id === id);
    return language;
  }

  static async create({ input }) {
    const newLanguage = {
      id: crypto.randomUUID(),
      ...input,
    };

    // Agregando el nuevo lenguaje en memoria nada mas, posteriormente se subira a una base de datos.
    LANGUAGES_JSON.push(newLanguage);

    return newLanguage;
  }

  static async update({ id, input }) {
    const indexLanguage = LANGUAGES_JSON.findIndex(
      (language) => language.id === id
    );

    if (indexLanguage === -1) return false;

    const languageUpdated = {
      ...LANGUAGES_JSON[indexLanguage],
      ...input,
    };

    LANGUAGES_JSON[indexLanguage] = languageUpdated;

    return languageUpdated;
  }

  static async delete({ id }) {
    const indexLanguage = LANGUAGES_JSON.findIndex(
      (language) => language.id === id
    );

    if (indexLanguage < 0) return false;

    LANGUAGES_JSON.splice(indexLanguage, 1);

    return true;
  }
}
