import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const payload = {
      pet_id: pet.id,
      user_id: 1,
      ...formData,
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
        throw new Error('Erro ao enviar o formulário de adoção');
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
      <form onSubmit={handleSubmit}>
        <div className='adopet-form-adocao-input'>
          <input
            className="base-input"
            type="text"
            id="name"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange} />
        </div>
        <div className="adopet-form-adocao-input">
          <input
            className="base-input"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange} />
        </div>
        <div className="adopet-form-adocao-input">
          <input
            className="base-input"
            type="text"
            id="phone"
            name="phone"
            placeholder="Telefone:"
            value={formData.phone}
            onChange={handleChange} />
        </div>
        <div className='adopet-form-adocao-footer'>
          <div className="adopet-form-adocao-input">
            <textarea
              id="message"
              name="message"
              placeholder="Mensagem:"
              rows={5}
              cols={10}
              className=" form-control"
              value={formData.message}
              onChange={handleChange} />
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