import { v4 as uuid } from "uuid";

const users = [
  {
    name: "Ali",
    lastName: "Mohamad",
    age: 30,
    id: "1",
  },
  {
    name: "Sara",
    lastName: "Ahmad",
    age: 25,
    id: "2",
  },
  {
    name: "ali",
    lastName: "mohamad",
    age: 30,
    id: "3",
  },
];

export const addUser = (req, res) => {
  const newUser = req.body;
  const userWithId = { ...newUser, id: uuid() };
  users.push(userWithId);
  res.status(201).send(userWithId);
};

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);

  if (foundUser) {
    res.send(foundUser);
  } else {
    res.status(404).send({ message: "User not found" });
  }
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === id);

  if (user) {
    const { name, lastName, age } = req.body;
    if (name) user.name = name;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
    res.status(200).send(user);
  } else {
    res.status(404).send({ message: "User not found" });
  }
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(200).send({ message: "User deleted successfully" });
  } else {
    res.status(404).send({ message: "User not found" });
  }
};
