import * as express from 'express';

import UsersLogic from '../logic/users';

export var UserRoutes = express.Router();

UserRoutes.get('/', (req, res, next)=> {
	res.json(UsersLogic.getAllUsers());
});

UserRoutes.get('/:id', (req, res, next)=> {
	res.json(UsersLogic.getUserById(parseInt(req.params.id)));
});
