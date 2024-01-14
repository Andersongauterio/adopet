import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import { useAuthToken } from '../../hooks/useAuthToken';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const species = [
  { label: 'Cachorro', value: 'cachorro' },
  { label: 'Gato', value: 'cachorro' },
  { label: 'Coelho', value: 'cachorro' },
  { label: 'Passaro', value: 'cachorro' },
  { label: 'Roedor', value: 'cachorro' },
];

const generos = [
  { label: 'Macho', value: 'macho' },
  { label: 'Fêmea', value: 'femea' },
  { label: 'Não sei', value: 'undefined' },
];

const tamanhos = [
  { label: 'Pequeno', value: 'pequeno' },
  { label: 'Médio', value: 'médio' },
  { label: 'Grande', value: 'grande' },
];

const cidades = [
  { label: 'Porto Alegre', value: '1' },
  { label: 'Dois Irmãos', value: '3' },
  { label: 'Novo Hamburgo', value: '4' },
  { label: 'São Leopoldo', value: '5' },
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
    city_id: number;
  };

  interface OptionType {
    label: string;
    value: string;
  }

  const navigate = useNavigate();
  const { petId } = useParams();
  const token = useAuthToken();

  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<FormData>();
  const [selectedCity, setSelectedCity] = useState<OptionType | null>(null);
  const [selectedSpecies, setSelectedSpecies] = useState<OptionType | null>(null);
  const [selectedGender, setSelectedGender] = useState<OptionType | null>(null);
  const [selectedSize, setSelectedSize] = useState<OptionType | null>(null);

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/pets/${petId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const petData = await response.json();
          reset(petData);
          const foundCity = cidades.find(city => city.value === petData.city_id.toString());
          setSelectedCity(foundCity ? foundCity : null);

          const foundSpecies = species.find(specie => specie.value === petData.species);
          setSelectedSpecies(foundSpecies ? foundSpecies : null);

          const foundGender = generos.find(genero => genero.value === petData.gender);
          setSelectedGender(foundGender ? foundGender : null);

          const foundSize = tamanhos.find(tamanho => tamanho.value === petData.size);
          setSelectedSize(foundSize ? foundSize : null);
        }
      } catch (error) {
        console.error('Erro ao buscar dados do pet', error);
      }
    };

    if (petId) {
      fetchPetData();
    }
  }, [petId, token, reset]);

  const onSubmit = async (data: FormData) => {

    const url = petId ? `${process.env.REACT_APP_API_URL}/pets/${petId}` : `${process.env.REACT_APP_API_URL}/pets`;
    const method = petId ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        toast.success(`Pet ${petId ? 'atualizado' : 'cadastrado'} com sucesso!`);
        reset();
        setSelectedCity(null);
        setSelectedSpecies(null);
        setSelectedGender(null);
        setSelectedSize(null);
        navigate(`/add-images/${responseData.id}`);
      } else {
        toast.error('Falha ao cadastrar pet.');
        console.error('Failed to post:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='adopet-form-pet-cadastro-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='adopet-form-pet-cadastro-fields'>
          <div className='adopet-form-pet-cadastro-part-1'>
            <div className='adopet-form-pet-cadastro-field'>
              <input
                className='adopet-form-pet-cadastro-input-name'
                type='text'
                {...register('name', { required: 'Nome é obrigatório' })}
                placeholder='Nome:' />
              {errors.name && <p className="adopetErrorMessage">{errors.name.message}</p>}
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <Controller
                name="city_id"
                control={control}
                rules={{ required: 'Cidade é obrigatória' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={cidades}
                    classNamePrefix="adopet-form-pet-cadastro-select"
                    placeholder="Cidade"
                    value={selectedCity}
                    onChange={val => {
                      field.onChange(val ? parseInt(val.value, 10) : null);
                      setSelectedCity(val as OptionType);
                    }}
                  />
                )}
              />
              {errors.city_id && <p className="adopetErrorMessage">{errors.city_id.message}</p>}
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <Controller
                name="species"
                control={control}
                rules={{ required: 'Espécie é obrigatória' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={species}
                    classNamePrefix="adopet-form-pet-cadastro-select"
                    placeholder="Espécie"
                    value={selectedSpecies}
                    onChange={val => {
                      field.onChange(val ? val.value : '');
                      setSelectedSpecies(val as OptionType);
                    }}
                  />
                )}
              />
              {errors.species && <p className="adopetErrorMessage">{errors.species.message}</p>}
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <textarea
                className='form-control'
                rows={4}
                {...register('description', {
                  required: 'Descrição é obrigatória',
                  minLength: { value: 10, message: "Descrição muito curta" }
                })}
                placeholder='Descrição'
              />
              {errors.description && <p className="adopetErrorMessage">{errors.description.message}</p>}
            </div>
          </div>
          <div className='adopet-form-pet-cadastro-part-2'>
            <div className='adopet-form-pet-cadastro-field'>
              <Controller
                name="gender"
                control={control}
                rules={{ required: 'Gênero é obrigatório' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={generos}
                    classNamePrefix="adopet-form-pet-cadastro-select"
                    placeholder="Gênero"
                    value={selectedGender}
                    onChange={val => {
                      field.onChange(val ? val.value : '');
                      setSelectedGender(val as OptionType);
                    }}
                  />
                )}
              />
              {errors.gender && <p className="adopetErrorMessage">{errors.gender.message}</p>}
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <Controller
                name="size"
                control={control}
                rules={{ required: 'Tamanho é obrigatório' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={tamanhos}
                    classNamePrefix="adopet-form-pet-cadastro-select"
                    placeholder="Tamanho"
                    value={selectedSize}
                    onChange={val => {
                      field.onChange(val ? val.value : '');
                      setSelectedSize(val as OptionType);
                    }}
                  />
                )}
              />
              {errors.size && <p className="adopetErrorMessage">{errors.size.message}</p>}
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <input
                className='adopet-form-pet-cadastro-input-age'
                type='number'
                min='0'
                {...register('age', {
                  required: 'Idade é obrigatória',
                  valueAsNumber: true,
                  min: { value: 0, message: "Idade não pode ser negativa" }
                })}
                placeholder='Idade:'
              />
              {errors.age && <p className="adopetErrorMessage">{errors.age.message}</p>}
              <label className='adopet-form-pet-cadastro-label-age'>Anos </label>
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <button className='btn btn-secondary'>salvar</button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer position='top-center' autoClose={3000} />
    </div>
  )
}

export default FormPetCadastro;
