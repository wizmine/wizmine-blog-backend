import { body } from "express-validator";

export const loginValidation = [
  body("email", "Invalid mail format").isEmail(),
  body("password", "Password must be at least 5 characters").isLength({ min: 5 }),
];

export const registerValidation = [
  body("email", "Invalid mail format").isEmail(),
  body("password", "Password must be at least 5 characters").isLength({ min: 5 }),
  body("fullName", "Please enter a name (minimum 3 characters)").isLength({ min: 3 }),
  body("avatarUrl", "Invalid avatar link").optional().isURL(),
];

export const postCreateValidation = [
  body("title", "Enter article title").isLength({ min: 3 }).isString(),
  body("text", "Enter article text").isLength({ min: 3 }).isString(),
  body("tags", "Invalid tags format (enter the array)").optional().isArray(),
  body("imageUrl", "Invalid image link").optional().isString(),
];
