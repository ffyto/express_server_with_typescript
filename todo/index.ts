import express, { Express, Request, Response, Router } from "express";
import { createTodoHandler } from "./todo.controller";

const router: express.Router = Router();

router.post("/", createTodoHandler);

export default router;
