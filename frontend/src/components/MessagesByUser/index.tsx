import { Msg } from '../../types/msg';
import './styles.css';

const msgs: Msg[] = [
  {
    id: 1,
    user_id: 1,
    sender_user_id: 2,
    msg: "Olá, esse pet está para adoção?",
    date: "01/10/1990",
  },
  {
    id: 2,
    user_id: 1,
    sender_user_id: 2,
    msg: "Olá, Está sim",
    date: "01/10/1990",
  },
  {
    id: 3,
    user_id: 1,
    sender_user_id: 2,
    msg: "Gostaria de visitar",
    date: "01/10/1990",
  },

]

const MessagesByUser = () => {
  return (
    <div className='adopet-message-by-user-container'>
      <div className="row">
        {msgs.map(msg => (
          <div key={msg.id}>
            <h4>{msg.msg}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesByUser;