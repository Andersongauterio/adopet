import "./styles.css";
import Select from 'react-select';

const especies = [
  { label: 'Cachorro', value: 'cachorro' },
  { label: 'Gato', value: 'gato' },
  { label: 'Hamster', value: 'hamster' },
];

const generos = [
  { label: 'Macho', value: 'macho' },
  { label: 'Fêmea', value: 'femea' },
];

const handleChangeEspecie = () => {
  console.log('Change especie')
};

const handleChangeGenero = () => {
  console.log('Change especie')
}


const PetFilter = () => {

  return (
    <div className="adopet-filter-container">
      <div className="adopet-filter-header">
        <h3>Filtros</h3>
      </div>
      <div className="adopet-filter-filters">
        <div className="adopet-select-filter-control">
          <Select
            options={especies}
            isClearable
            placeholder="Espécies"
            onChange={handleChangeEspecie}
            isMulti={false}
            classNamePrefix="adopet-filter-select"
          />
        </div>
        <div className="adopet-select-filter-control">
          <Select
            options={generos}
            isClearable
            placeholder="Gênero"
            onChange={handleChangeGenero}
            isMulti={false}
            classNamePrefix="adopet-filter-select"
          />
        </div>
      </div>
      <div className="adopet-filter-button">
        <button className="btn btn-secondary btn-adopet-filter">Filtrar</button>
      </div>
    </div>
  );
};

export default PetFilter;