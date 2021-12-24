import express from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../controllers/userCtrl.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - name
 *              - email
 *          properties:
 *              _id: 
 *                  type: string
 *                  description: The auto generated id of the user
 *              name:
 *                  type: string
 *                  description: Name of the user
 *              email:
 *                  type: string
 *                  description: Email Id of the user
 *          example:
 *              name: "John Doe"
 *              email: "john@doe.com"
 */

/**
 * @swagger
 * tags:
 *  name: "User"
 *  description: The User managing API
 */

/**
 * @swagger
 * /user:
 *  get: 
 *      summary: Return all users
 *      tags: [User]
 *      responses:
 *          200:
 *              description: "List of all users"
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: "#/components/schemas/User"
 */
// get all users.
router.get("/", getUsers);

/**
 * @swagger
 * /user:
 *  post:
 *      summary: Create a User
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/User"
 *      responses:
 *          200:
 *              description: "The User is successfully created."
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/User"
 *              
 */
// Create New User.
router.post("/", createUser);

/**
 * @swagger
 * /user/{id}:
 *  put:
 *      summary: Update User by id
 *      tags: [User]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: The user id 
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/User"
 *      responses:
 *          200:
 *              description: "The User is successfully created."
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/User"
 *              
 */
// Update User by id.
router.put("/:id", updateUser);
/**
 * @swagger
 * /user/{id}:
 *  delete:
 *      summary: Delete User by id
 *      tags: [User]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: The user id
 *      responses:
 *          200:
 *              description: "The User is successfully created."
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/User"
 *              
 */
router.delete("/:id", deleteUser);


export default router;