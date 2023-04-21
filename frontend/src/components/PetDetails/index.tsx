import "./styles.css";

const PetDetails = () => {
    return (
        <div className="pet-details-container">
            <div className="pet-details-main-img">
                <img src="#" alt="Imagem do pet" />
            </div>
            <div className="pet-details-info">
                <h4>Nome do Pet: </h4>
                <h4>Porte: </h4>
                <h4>Castrado: </h4>
                <h4>Gênero: </h4>
                <h4>Cidade: </h4>
                <h4>Descrição: </h4>
                <h4>E-mail: </h4>
                <h4>Telefone: </h4>
            </div>
        </div>
    );
};

export default PetDetails;