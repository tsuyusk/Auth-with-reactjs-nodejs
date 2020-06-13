import express from "express";
import crypto from "crypto";
import knex from "./database/connection";

const routes = express.Router();

routes.get("/users", async (req, res) => {
  try {
    const users = await knex("users").select("*");
    
    return res.json(users);
  } catch (error) {
    console.log(error)
  }
});

routes.post("/users", async (req, res) => {
  try {
    const { username, password } = req.body;

    const randomCrypto = crypto.randomBytes(8);
    const token = randomCrypto.toString("hex");
    
    const user = {
      username,
      token,
      password,
    }

    await knex("users").insert(user)
    return res.json(user);
  } catch {
    return res.status(400).json({message: "The user already exists."})
  }
});


routes.post("/auth/user", async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await knex("users")
      .select("*")
      .where("username", username)
      .andWhere("password", password)
      .first();
    if (user) {
      return res.json({has: true})
    } else {
      console.log("aa")
      return res.status(400).json({has: false})
    }
  } catch (error) {
    console.log(error)
  }
})

export default routes;
