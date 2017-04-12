import DAL from 'dal';

export default function get(id: number) {
	return DAL.UsersGetter.getUserById(id);
}