import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Pet } from '../../types/pet';
import { toast, ToastContainer } from 'react-toastify';
import './styles.css';

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

  const initialState: FormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formData, setFormData] = useState<FormData>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (data: FormData) => {

    const payload = {
      pet_id: pet.id,
      user_id: 1, // Assumindo que este é um ID de usuário fixo
      ...data,
    };
    try {
      const response = await fetch('http://localhost:8080/adoption-forms', {
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

      const data = await response.json();
      setFormData(initialState);
      toast.success('Formulário enviado com sucesso!', {
        onClose: () => navigate(-1)
      });
      //console.log('Formulário enviado com sucesso:', data);

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
            { ...register('name', { required: 'Nome é obrigatório' }) }
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange} />
            { errors.name && <p>{ errors.name.message }</p> }
        </div>
        <div className="adopet-form-adocao-input">
          <input
            className="base-input"
            type="text"
            id="email"
            { ...register('email', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido'
              }
            }) }  
            placeholder="Email"
            value={formData.email}
            onChange={handleChange} />
        </div>
        <div className="adopet-form-adocao-input">
          <input
            className="base-input"
            type="text"
            id="phone"
            { ...register('phone', { required: 'Telefone é obrigatório' }) }
            placeholder="Telefone:"
            value={formData.phone}
            onChange={handleChange} />
            { errors.phone && <p>{ errors.phone.message }</p> }
        </div>
        <div className='adopet-form-adocao-footer'>
          <div className="adopet-form-adocao-input">
            <textarea
              id="message"
              { ...register('message', { required: 'Mensagem é obrigatória' }) }
              placeholder="Mensagem:"
              rows={5}
              cols={10}
              className=" form-control"
              value={formData.message}
              onChange={handleChange} />
              { errors.message && <p>{errors.message.message}</p> }
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