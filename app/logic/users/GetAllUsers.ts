import { Users } from 'dal';

export default function get() {
	return Users.getUsers();
}
