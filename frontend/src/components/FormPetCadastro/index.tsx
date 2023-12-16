import { useState } from 'react';
import Select from 'react-select';
import { PetImgs } from '../../types/petImgs';
import './styles.css';

const especies = [
  { label: 'Cachorro', value: 'cachorro' },
];

const generos = [
  { label: 'Macho', value: 'macho' },
];

const tamanhos = [
  { label: 'Grande', value: 'grande' },
];

const cidades = [
  { label: 'Dois Irmãos', value: '1' },
];

const FormPetCadastro = () => {

  interface FormData {
    name: string;
    description: string;
    size: string;
    gender: string;
    species: string;
    age: string;
    user_id: number;
    city_id: number | null;
  };

  const initialFormData: FormData = {
    name: '',
    description: '',
    size: '',
    gender: '',
    species: '',
    age: '',
    user_id: 1,
    city_id: null,
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const selectedSpecies = especies.find(option => option.value === formData.species) || null;
  const selectedGender = generos.find(option => option.value === formData.gender) || null;
  const selectedCity = cidades.find(option => option.value === formData.city_id?.toString()) || null;
  const selectedSize = tamanhos.find(option => option.value === formData.size) || null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const submittedData = {
      ...formData,
      age: formData.age ? parseInt(formData.age, 10) : 0, // Convertendo 'age' para número
    };

    try {
      const response = await fetch('http://localhost:8080/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submittedData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setFormData(initialFormData);
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
              <input name="name"
                className='adopet-form-pet-cadastro-input-name'
                value={formData.name}
                onChange={handleChange}
                id="name"
                type="text"
                placeholder='Nome:' />
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <Select
                options={cidades}
                isClearable
                placeholder="Cidade"
                onChange={handleChangeCidade}
                isMulti={false}
                classNamePrefix="adopet-form-pet-cadastro-select"
                value={selectedCity}
              />
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <Select
                options={especies}
                isClearable
                placeholder="Espécie"
                onChange={handleChangeType}
                isMulti={false}
                classNamePrefix="adopet-form-pet-cadastro-select"
                value={selectedSpecies}
              />
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <textarea rows={4}
                name="description"
                id="description"
                placeholder="Descrição"
                onChange={handleChange}
                value={formData.description} />
            </div>
          </div>
          <div className='adopet-form-pet-cadastro-part-2'>
            <div className='adopet-form-pet-cadastro-field'>
              <Select
                options={generos}
                isClearable
                placeholder="Gênero"
                onChange={handleChangeGender}
                isMulti={false}
                classNamePrefix="adopet-form-pet-cadastro-select"
                value={selectedGender}
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
                value={selectedSize}
              />
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <input
                className='adopet-form-pet-cadastro-input-age'
                value={formData.age}
                onChange={handleChange}
                name="age"
                id="age"
                type="number"
                min="0"
                placeholder='Idade:' />
              <label className='adopet-form-pet-cadastro-label-age'>Anos </label>
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <button className='btn btn-secondary'>salvar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormPetCadastro;
