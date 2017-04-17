import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

import { WinstonLogger } from './loggers/WinstonLogger';
import { UserRoutes } from './routes';
import { ServerConfig } from './config/ServerConfig';

export class App {
	private _express: express.Application;
	private _port: number|string|boolean;

	constructor() {
		this._express = express();

		this._setMiddleware();
		this._setRoutes();
		this._setPort();
	}

	public getExpressApp() {
		return this._express;
	}

	public getPort() {
		return this._port;
	}

	private _setMiddleware(): void {
		this._express.use(morgan('combined', {stream: new WinstonLogger().getStream()}));
		this._express.use(bodyParser.json());
		this._express.use(bodyParser.urlencoded({extended: false}));
	}

	private _setRoutes(): void {
		this._express.use('/users', UserRoutes);
	}

	private _setPort() {
		this._port = App._normalizePort(process.env.PORT || ServerConfig.PORT);
		this._express.set('port', this._port);
	}

	private static _normalizePort(val: number|string): number|string|boolean {
		let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;

		if (isNaN(port)) {
			return val
		}
		else if (port >= 0) {
			return port;
		}
		else {
			return false;
		}
	}
}
