import DAL from 'dal';

export default function get() {
	return DAL.UsersGetter.getUsers();
}
