import UserMessages from '../../components/UserMessages';
import './styles.css';

const Messages = () => {
  return (
    <div className='adopet-messages-container'>
      <div className='adopet-messages-user-messages'>
        <UserMessages />
      </div>
      <div className='adopet-messages-byuser'>
        <h1>Messages by user</h1>
      </div>
    </div>
  );
};

export default Messages;