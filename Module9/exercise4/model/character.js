const axios = require('axios');

class CharacterModel {
  async fetchCharacters(page) {
    try {
      const response = await axios.get(`https://anapioficeandfire.com/api/characters?page=${page}`);
      const characters = response.data;
      return characters;
    } catch (error) {
      console.error(error);
    }
  }
  async fetchCharacterById(id) {
    try {
      const response = await axios.get(`https://anapioficeandfire.com/api/characters/${id}`);
      const character = response.data;
      return character;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = CharacterModel;
