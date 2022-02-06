import * as express from "express";

export default class Middleware {
  constructor(app: express.Application) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
  }
}
