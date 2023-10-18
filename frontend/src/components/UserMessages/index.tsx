import { User } from '../../types/user';
import './styles.css';

const usersMsg: User[] = [
  {
    id: 1,
    name: "Anderson",
    phone: 984322799
  },
  {
    id: 2,
    name: "Ana",
    phone: 984322799
  },
  {
    id: 3,
    name: "Claudio",
    phone: 984322799
  },
  {
    id: 4,
    name: "Fernando",
    phone: 984322799
  },
];

const UserMessages = () => {
  return (
    <div className='adopet-user-messages-container'>
      <div className="row">
        {usersMsg.map(user => (
          <div key={user.id}>
            <h4>{user.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserMessages;