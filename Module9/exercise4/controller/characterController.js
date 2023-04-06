const CharacterModel = require('../model/character');

class CharacterController {
  constructor() {
    this.characterModel = new CharacterModel();
  }

  async getCharacters(page) {
    const characters = await this.characterModel.fetchCharacters(page);
    return characters;
  }

  async getCharacterById(id) {
    const character = await this.characterModel.fetchCharacterById(id);
    return character;
  }
}

module.exports = CharacterController;
