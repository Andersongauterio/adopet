import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import { useAuthToken } from '../../hooks/useAuthToken';

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
    city_id: number | null;
  };

  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<FormData>();
  const token = useAuthToken();

  const onSubmit = async (data: FormData) => {

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/pets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({...data, user_id: 1}),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toast.success('Pet cadastrado com sucesso!');
        reset();
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
                    value={cidades.find(option => option.value === (field.value ? field.value.toString() : ''))}
                    onChange={val => field.onChange(val ? parseInt(val.value, 10) : null)}
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
                    value={species.find(option => option.value === field.value)}
                    onChange={val => field.onChange(val ? val.value : '')}
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
                    value={generos.find(option => option.value === field.value)}
                    onChange={val => field.onChange(val ? val.value : '')}
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
                    value={tamanhos.find(option => option.value === field.value)}
                    onChange={val => field.onChange(val ? val.value : '')}
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
