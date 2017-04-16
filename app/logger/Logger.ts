var winston = require('winston');

export var winstonStream = {
	write: (message, encoding) => {
		winston.info(message);
	}
};