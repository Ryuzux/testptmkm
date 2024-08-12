import { GetServerSideProps } from 'next';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface UserDetailsProps {
  user: User;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params?.id}`);
  const user: User = await res.json();
  return {
    props: {
      user,
    },
  };
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}

export default UserDetails;
