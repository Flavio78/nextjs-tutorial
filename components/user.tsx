import { User } from '@/types';

interface Props {
  user: User;
}

const User = ({ user: { name, email } }: Props) => {
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default User;
