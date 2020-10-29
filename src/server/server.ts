import express, { Express, Request, Response } from 'express';
import { ServerBuilder } from './server-builder';
import path from 'path';
import { IController } from './controllers/IController';

export class Server {
    private _app: Express;
    private _port: number;
    private _env: String;
    private _controllers: IController[];

    constructor(serverBuilder: ServerBuilder) {
        this._app = serverBuilder.app;
        this._port = serverBuilder.port;
        this._env = serverBuilder.env;
        this._controllers = serverBuilder.controllers;
    }

    public start() {
        if (this._env == 'production') {
            this._app.use(express.static(path.resolve("./") + "/build/client"));
            
            this._app.get("*", (req: Request, res: Response) => {
                res.sendFile(path.resolve("./") + "/build/client/index.html");
            });
        }

        this._controllers.forEach((controller) => {
            controller.handler(this._app);
        });

        this._app.listen(this._port, () => console.log(`Server started at port ${this._port}`))
    }
}