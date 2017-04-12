import { UsersDB } from '../DB';

export function getUsers() {
	return UsersDB;
}

export function getUserById(id: number) {
	return UsersDB.find((user: any)=> {
		return user.id === id;
	});
}
