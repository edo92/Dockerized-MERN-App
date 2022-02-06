import { Router, Application } from "express";
import { Userdata } from "../controller";

export default class Routes {
  private router: Router;

  constructor(app: Application) {
    this.router = Router();
    this.initRoutes();
    app.use(this.router);
  }

  private initRoutes(): void {
    this.router.get("/getdata", Userdata.getUserdata);
    this.router.get("/getusers", Userdata.updateUserdata);
  }
}
