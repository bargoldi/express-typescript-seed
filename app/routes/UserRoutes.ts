import * as express from 'express';

import { getAllUsers, getUserById } from '../logic/users';

export var UserRoutes = express.Router();

UserRoutes.get('/', (req, res, next)=> {
	res.json(getAllUsers());
});

UserRoutes.get('/:id', (req, res, next)=> {
	res.json(getUserById(parseInt(req.params.id)));
});
