import { GetStaticProps } from 'next';

interface User {
  id: number;
  name: string;
}

interface UsersListProps {
  users: User[];
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();
  return {
    props: {
      users,
    },
  };
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <a href={`/users/${user.id}`}>{user.name}</a>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
