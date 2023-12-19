import { Pet } from '../../types/pet';
import './styles.css';

type Props = {
  pet: Pet;
}

const FormAdocao = ({ pet }: Props) => {
  return (
    <div className='adopet-form-adocao-container'>
      <div className='adopet-form-adocao-input'>
        <input
          className="base-input"
          type="text"
          id="name"
          name="name"
          placeholder="Nome" />
      </div>
      <div className="adopet-form-adocao-input">
        <input
          className="base-input"
          type="text"
          id="email"
          name="email"
          placeholder="Email" />
      </div>
      <div className="adopet-form-adocao-input">
        <input
          className="base-input"
          type="text"
          id="phone"
          name="phone"
          placeholder="Telefone:" />
      </div>
      <div className='adopet-form-adocao-footer'>
        <div className="adopet-form-adocao-input">
          <textarea
            id="message"
            name="message"
            placeholder="Mensagem:"
            rows={5}
            cols={10}
            className=" form-control" />
        </div>
        <div className='adopet-form-adocao-button'>
          <button className='btn btn-secondary'>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default FormAdocao;