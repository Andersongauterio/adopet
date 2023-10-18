import MessagesByUser from '../../components/MessagesByUser';
import UserMessages from '../../components/UserMessages';
import './styles.css';

const Messages = () => {
  return (
    <div className='adopet-messages-container'>
      <div className='adopet-messages-user-messages'>
        <UserMessages />
      </div>
      <div className='adopet-messages-byuser'>
        <MessagesByUser />
      </div>
    </div>
  );
};

export default Messages;