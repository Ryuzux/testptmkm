import { GetServerSideProps } from 'next';
import styles from '@/styles/User.module.css';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: Address;
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
    <div className={styles.name}>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <div className={styles.address}>
        <h2>Address:</h2>
        <p>{user.address.street}, {user.address.suite}</p>
        <p>{user.address.city}, {user.address.zipcode}</p>
        <p>Latitude: {user.address.geo.lat}, Longitude: {user.address.geo.lng}</p>
      </div>
    </div>
  );
}

export default UserDetails;
