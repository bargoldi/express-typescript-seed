import { Users } from 'dal';

export function getUserById(id: number) {
	return Users.getUserById(id);
}