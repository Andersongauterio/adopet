import PetFilter from "../../components/PetFilter";
import PetsList from "../../components/PetsList";
import "./styles.css";

const PetList = () => {
  return (
    <div className="adopet-petlist-container">
      <div className="adopet-petlist-filter">
        <PetFilter />
      </div>
      <div className="adopet-petlist-list">
        <PetsList />
      </div>
    </div>
  );
};

export default PetList;