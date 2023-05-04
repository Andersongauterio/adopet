import "./styles.css";

const Contact = () => {
  return (
    <div className="pet-contact-container">
      <div className="pet-contact-header">
        <h1> Formulário de adoção </h1>
      </div>
      <div className="pet-form-contact">
        <form className="form-group" action="#">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome:"
            className="base-input form-control" />
          <textarea
            id="descricao"
            name="descricao"
            placeholder="Descrição:"
            rows={10}
            cols={20}
            className=" form-control" />
        </form>
      </div>

    </div>
  );
};

export default Contact;

