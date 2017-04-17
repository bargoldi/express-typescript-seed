import { Users } from 'dal';

export function getAllUsers() {
	return Users.getUsers();
}
