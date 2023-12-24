import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Pet } from '../../types/pet';
import { toast, ToastContainer } from 'react-toastify';
import './styles.css';
import { useAuth } from '../../contexts/AuthContext';

type Props = {
  pet: Pet;
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const FormAdocao = ({ pet }: Props) => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { user } = useAuth();

  const onSubmit = async (data: FormData) => {

    const payload = {
      pet_id: pet.id,
      user_id: user?.id,
      ...data,
    };
    try {
      const response = await  fetch(`${process.env.REACT_APP_API_URL}/adoption-forms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        toast.error('Erro ao enviar o formulário.');
        return;
      }
      toast.success('Formulário enviado com sucesso!', {
        onClose: () => navigate(-1)
      });

    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div className='adopet-form-adocao-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='adopet-form-adocao-input'>
          <input
            className="base-input"
            type="text"
            id="name"
            {...register('name', { required: 'Nome é obrigatório' })}
            placeholder="Nome" />
          {errors.name && <p className="adopetErrorMessage">{errors.name.message}</p>}
        </div>
        <div className="adopet-form-adocao-input">
          <input
            className="base-input"
            type="text"
            id="email"
            {...register('email', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido'
              }
            })}
            placeholder="Email" />
          {errors.email && <p className="adopetErrorMessage">{errors.email.message}</p>}
        </div>
        <div className="adopet-form-adocao-input">
          <input
            className='base-input'
            type="text"
            id="phone"
            {...register('phone', { required: 'Telefone é obrigatório' })}
            placeholder="Telefone:" />
          {errors.phone && <p className="adopetErrorMessage">{errors.phone.message}</p>}
        </div>
        <div className='adopet-form-adocao-footer'>
          <div className="adopet-form-adocao-input">
            <textarea
              id="message"
              {...register('message', { required: 'Mensagem é obrigatória' })}
              placeholder="Mensagem:"
              rows={5}
              cols={10}
              className=" form-control" />
            {errors.message && <p className="adopetErrorMessage">{errors.message.message}</p>}
          </div>
          <div className='adopet-form-adocao-button'>
            <button className='btn btn-secondary'>Enviar</button>
          </div>
        </div>
      </form>
      <ToastContainer position="top-center" autoClose={3500} />
    </div>
  );
};

export default FormAdocao;