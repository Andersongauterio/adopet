import { useState } from "react";
import PetsList from "../../components/PetsList";
import "./styles.css";


const PetList = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const handleChangePage = (newPage: number) => {
    setCurrentPage(newPage);
  };


  return (
    <div className="adopet-petlist-container">
      <div className="adopet-petlist-filter">

      </div>
      <div className="adopet-petlist-list">
        <PetsList currentPage={currentPage} pageSize={pageSize} />
        <div className="adopet-pagination-controls">
          <button className="btn btn-primary" onClick={() => handleChangePage(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
          <span className="adopet-pagination-span"> Página {currentPage} </span>
          <button className="btn btn-primary" onClick={() => handleChangePage(currentPage + 1)}>Próxima</button>
        </div>
      </div>
    </div>
  );
};

export default PetList;