import * as express from 'express';
import * as bodyParser from 'body-parser';

import { winstonStream } from './logger/Logger';
import { UserRoutes } from './routes';

class App {
	public express: express.Application;

	constructor() {
		this.express = express();
		this.middleware();
		this.routes();
	}

	private middleware(): void {
		this.express.use(express.logger({stream:winstonStream}));
		this.express.use(bodyParser.json());
		this.express.use(bodyParser.urlencoded({extended: false}));
	}

	private routes(): void {
		this.express.use('/users', UserRoutes);
	}
}

export default new App().express;
