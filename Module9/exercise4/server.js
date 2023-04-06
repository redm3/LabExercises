const express = require('express');
const CharacterController = require('./controller/characterController');

const app = express();
const characterController = new CharacterController();

/* app.get('/characters', async (req, res) => {
  const characters = await characterController.getCharacters();
  res.json(characters);
}); */

app.get('/characters', async (req, res) => {
  const page = req.query.page;
  const characters = await characterController.getCharacters(page);
  res.json(characters);
});

app.get('/characters/:id', async (req, res) => {
  const id = req.params.id;
  const character = await characterController.getCharacterById(id);
  res.json(character);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});