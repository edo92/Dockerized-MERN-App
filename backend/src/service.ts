import * as express from "express";
import Routes from "./routes";
import Middleware from "./middleware";

interface IServer {
  start: () => void;
  app: express.Application;
}

export default class Server implements IServer {
  private port: number;
  public app: express.Application;

  constructor(port: number) {
    this.port = port;
    this.app = express();
  }

  public start(): void {
    this.dependencies();
    this.createServer();
  }

  private dependencies(): void {
    new Routes(this.app);
    new Middleware(this.app);
  }

  private createServer(): void {
    this.app.listen(this.port, () => {
      console.log(`🚀 Listening on port ${this.port}`);
    });
  }
}
