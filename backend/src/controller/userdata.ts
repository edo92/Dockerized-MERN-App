import { Request, Response } from "express";

export class Userdata {
  static async getUserdata(_: Request, res: Response): Promise<void> {
    const resdata = { result: "this is a result" };
    res.json(resdata).status(200);
  }

  static async updateUserdata(_: Request, res: Response): Promise<void> {
    const resdata = { status: "success" };
    res.json(resdata).status(500);
  }
}
