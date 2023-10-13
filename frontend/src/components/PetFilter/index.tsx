import "./styles.css";
import Select from 'react-select';
import CityComboBox from "../CityComboBox";

const especies = [
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

const handleChangeEspecie = () => {
  console.log('Change especie')
};

const handleChangeGenero = () => {
  console.log('Change especie')
}

const handleChangeTamanho = () => {
  console.log('Change tamanho')
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
        <div className="adopet-select-filter-control adopet-select-filter-control-age">
          <label className="base-label">Idade:</label>
          <div className="adopet-select-filter-control-inputs">
            <input placeholder="De" type="number" name="from" className="base-input adopet-select-filter-input-age"/>
            <input placeholder="Até" type="number" name="to" className="base-input adopet-select-filter-input-age"/>
          </div>
        </div>
        <div className="adopet-select-filter-control">
          <Select
            options={tamanhos}
            isClearable
            placeholder="Tamanho"
            onChange={handleChangeTamanho}
            isMulti={false}
            classNamePrefix="adopet-filter-select"
          />
        </div>
        <div className="adopet-select-filter-control">
          <CityComboBox />
        </div>
      </div>
      <div className="adopet-filter-button">
        <button className="btn btn-secondary btn-adopet-filter">Filtrar</button>
      </div>
    </div>
  );
};

export default PetFilter;