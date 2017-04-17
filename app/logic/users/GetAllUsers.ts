import DAL from 'dal';

export default function get() {
	return DAL.Users.getUsers();
}
