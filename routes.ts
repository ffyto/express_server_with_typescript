import express, { Express, Request, Response } from "express";
import router from "./todo/index";

export const routes = function (app: any) {
	app.use("/todos", router);
};
