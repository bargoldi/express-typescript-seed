import * as winston from 'winston';

export class WinstonLogger {
	private _logger;

	constructor() {
		let transports = this._getTransportsConfiguration();

		this._logger = new winston.Logger({
			transports,
			exitOnError: false
		});

		this._logger.stream = {
			write: (message) => {
				this._logger.info(message);
			}
		};
	}

	getStream() {
		return this._logger.stream;
	}

	private _getTransportsConfiguration() {
		return [
			new winston.transports.File({
				level: 'info',
				filename: './logs/all-logs.log',
				handleExceptions: true,
				json: true,
				maxsize: 5242880, //5MB
				maxFiles: 5,
				colorize: false
			}),
			new winston.transports.Console({
				level: 'debug',
				handleExceptions: true,
				json: false,
				colorize: true
			})
		];
	}
}
