import Select from 'react-select';
import './styles.css';

const cidades = [
  { label: 'Dois Irmãos', value: 'dois irmaos' },
  { label: 'Novo Hamburgo', value: 'novo hamburgo' },
  { label: 'Porto Alegre', value: 'poorto alegre' },
];

const handleChangeCidade = () => {
  console.log('Change cidade')
}

const CityComboBox = () => {
  return (
    <div className='adopet-combo-box-city-container'>
      <Select
        options={cidades}
        isClearable
        placeholder="Cidade"
        onChange={handleChangeCidade}
        isMulti={false}
        classNamePrefix="adopet-combo-box-city-select"
      />
    </div>
  );
};

export default CityComboBox;