const express = require('express');

const { sequelize, User, Post } = require('./models');

const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
  const { name, email, role } = req.body;

  try {
    const user = await User.create({ name, email, role });

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'something went wrong' });
  }
});

app.get('/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const users = await User.findOne({
      where: { uuid: uuid },
    });
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'something went wrong' });
  }
});

app.post('/posts', async (req, res) => {
  const { userUuid, body } = req.body;
  try {
    const user = await User.findOne({ where: { uuid: userUuid } });
    const post = await Post.create({ body, userId: user.id });
    return res.json(post);
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.listen({ port: 5000 }, async () => {
  console.log(`Server is up on http://localhost:5000`);
  await sequelize.authenticate();
  console.log(`Database Connected!`);
});
