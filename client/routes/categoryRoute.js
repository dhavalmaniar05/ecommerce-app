import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  categoryController,
  creatCategoryController,
  updateCategoryController,
  singleCategoryController,
  deleteCategoryController,
} from "./../controllers/categoryController.js";

const router = express.Router();

router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  creatCategoryController
);

router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

router.get("/get-category", categoryController);

router.get("/single-category/:slug", singleCategoryController);

router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
