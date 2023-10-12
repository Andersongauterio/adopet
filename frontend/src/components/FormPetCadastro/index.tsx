import Select from 'react-select';
import { ReactComponent as AddIcon } from '../../assets/images/add.svg';
import { PetImgs } from '../../types/petImgs';
import './styles.css';

const especies = [
  { label: 'Cachorro', value: 'cachorro' },
  { label: 'Gato', value: 'gato' },
  { label: 'Hamster', value: 'hamster' },
];

const cidades = [
  { label: 'Dois Irmãos', value: 'dois irmaos' },
  { label: 'Novo Hamburgo', value: 'novo hamburgo' },
  { label: 'Porto Alegre', value: 'poorto alegre' },
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

const handleChangeCidade = () => {
  console.log('Change cidade')
};

const handleChangeEspecie = () => {
  console.log('Change especie')
};

const handleChangeGenero = () => {
  console.log('Change especie')
};

const handleChangeTamanho = () => {
  console.log('Change tamanho')
};

const FormPetCadastro = () => {

  const petImgs: PetImgs[] = [
    {
      pet_id: 1,
      img_id: 1,
      name: "Imagem 1",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg"
    },
    {
      pet_id: 1,
      img_id: 2,
      name: "Imagem 2",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg"
    },
    {
      pet_id: 1,
      img_id: 3,
      name: "Imagem 3",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg"
    },
    {
      pet_id: 1,
      img_id: 4,
      name: "Imagem 4",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg"
    },
    {
      pet_id: 1,
      img_id: 5,
      name: "Imagem 5",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg"
    }
  ]

  return (
    <div className='adopet-form-pet-cadastro-container'>
      <form action="#">
        <div className='adopet-form-pet-cadastro-fields'>
          <div className='adopet-form-pet-cadastro-part-1'>
            <div className='adopet-form-pet-cadastro-field'>
              <input name="name" id="name" type="text" placeholder='Nome:' />
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <Select
                options={cidades}
                isClearable
                placeholder="Cidade"
                onChange={handleChangeCidade}
                isMulti={false}
                classNamePrefix="adopet-form-pet-cadastro-select"
              />
            </div>
            <div className='adopet-form-pet-cadastro-field'>
              <Select
                options={especies}
                isClearable
                placeholder="Espécies"
                onChange={handleChangeEspecie}
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
                onChange={handleChangeGenero}
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
