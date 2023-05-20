import { Users } from '@/types';
import { GetStaticProps, GetStaticPropsContext } from 'next';

interface Props {
  users: Users;
}

const UserList = ({ users }: Props) => {
  return (
    <div>
      <h1>List of Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: Users = await response.json();
  return {
    props: { users },
  };
};
