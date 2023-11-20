import { useState } from 'react';
import Select from 'react-select';
import { ReactComponent as AddIcon } from '../../assets/images/add.svg';
import { PetImgs } from '../../types/petImgs';
import './styles.css';

const type = [
  { label: 'Cachorro', value: 'cachorro' },
  { label: 'Gato', value: 'gato' },
  { label: 'Hamster', value: 'hamster' },
];

const generos = [
  { label: 'Macho', value: 'macho' },
  { label: 'Fêmea', value: 'femea' },
];

const tamanhos = [
  { label: 'Grande', value: 'grande' },
  { label: 'Médio', value: 'medio' },
  { label: 'Pequeno', value: 'pequeno' },
];

const cidades = [
  { label: 'Dois Irmãos', value: '1' },
  { label: 'Novo Hamburgo', value: '2' },
  { label: 'Porto Alegre', value: '3' },
];

const FormPetCadastro = () => {

  interface FormData {
    name: string;
    description: string;
    size: string;
    gender: string;
    type: string;
    user_id: number;
    city_id: number | null; // Allow both number and null
  }

  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    size: '',
    gender: '',
    type: '',
    user_id: 1,
    city_id: null,
  });

  const handleChangeCidade = (selectedOption: any) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      city_id: selectedOption ? parseInt(selectedOption.value, 10) : null,
    }));
  };

  const handleChangeType = (selectedOption: any) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      type: selectedOption ? selectedOption.value : null,
    }));
  };

  const handleChangeTamanho = (selectedOption: any) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      size: selectedOption ? selectedOption.value : null,
    }));
  };
  
  const handleChangeGender = (selectedOption: any) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      gender: selectedOption ? selectedOption.value : null,
    }));
  };

  const petImgs: PetImgs[] = []

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Your fetch call
    try {
      const response = await fetch('http://localhost:8080/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error('Failed to post:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='adopet-form-pet-cadastro-container'>
      <form onSubmit={handleSubmit}>
        <div className='adopet-form-pet-cadastro-fields'>
          <div className='adopet-form-pet-cadastro-part-1'>
            <div className='adopet-form-pet-cadastro-field'>
              <input name="name" value={formData.name} onChange={handleChange} id="name" type="text" placeholder='Nome:' />
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <Select
                options={cidades}
                isClearable
                placeholder="Cidade"
                onChange={handleChangeCidade}
                isMulti={false}
                classNamePrefix="adopet-form-pet-cadastro-select"
                value={cidades.find(option => parseInt(option.value, 10) === formData.city_id)}
              />
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <Select
                options={type}
                isClearable
                placeholder="Espécies"
                onChange={handleChangeType}
                isMulti={false}
                classNamePrefix="adopet-form-pet-cadastro-select"
              />
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <textarea rows={4} name="description" id="description" placeholder="Descrição" />
            </div>
          </div>
          <div className='adopet-form-pet-cadastro-part-2'>
            <div className='adopet-form-pet-cadastro-field'>
              <input name="age" id="age" type="number" placeholder='Idade:' />
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <Select
                options={generos}
                isClearable
                placeholder="Gênero"
                onChange={ handleChangeGender }
                isMulti={false}
                classNamePrefix="adopet-form-pet-cadastro-select"
              />
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <Select
                options={tamanhos}
                isClearable
                placeholder="Tamanho"
                onChange={handleChangeTamanho}
                isMulti={false}
                classNamePrefix="adopet-form-pet-cadastro-select"
              />
            </div>
            <div className='adopet-form-pet-cadastro-field adopet-form-pet-cadastro-field-add-img'>
              <AddIcon />
              <h5>Imagem</h5>
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <button className='btn btn-secondary'>salvar</button>
            </div>
          </div>
        </div>
      </form>
      <div className='adopet-form-pet-cadastro-imgs'>
        {petImgs.map(imgs => (
          <div className="adopet-form-pet-cadastro-img" key={imgs.img_id}>
              <img src={imgs.imgUrl} alt={imgs.name} />
          </div>
        ))} 
      </div>
    </div>
  )
}

export default FormPetCadastro;
