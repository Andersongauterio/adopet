import { useState } from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {

    const submittedData = {
      ...formData,
      age: formData.age ? parseInt(formData.age, 10) : 0,
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
        toast.success('Pet cadastrado com sucesso!');
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
              {errors.name && <p>{errors.name.message}</p>}
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
              {errors.city_id && <p>{errors.city_id.message}</p>}
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <Controller
                name="species"
                control={control}
                rules={{ required: 'Espécie é obrigatória' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={especies}
                    classNamePrefix="adopet-form-pet-cadastro-select"
                    placeholder="Espécie"
                    value={especies.find(option => option.value === field.value)}
                    onChange={val => field.onChange(val ? val.value : '')}
                  />
                )}
              />
              {errors.species && <p>{errors.species.message}</p>}
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
              {errors.description && <p>{errors.description.message}</p>}
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
              {errors.gender && <p>{errors.gender.message}</p>}
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
              {errors.size && <p>{errors.size.message}</p>}
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
              {errors.age && <p>{errors.age.message}</p>}
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
