import Mongoose from "mongoose";
import UserModel from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    try {
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
  const { id: _id } = req.params;
  const user = req.body;
  if(!Mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No User with that Id");
  };

  try {
    const updateUser = await UserModel.findByIdAndUpdate(_id, user, {new: true});
    res.json(updateUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const deleteUser = async (req, res) => {
  const { id: _id } = req.params;
  if(!Mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No User with that Id");
  };
  try {
    const updateUser = await UserModel.remove({_id: _id});
    res.json("User removed");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}