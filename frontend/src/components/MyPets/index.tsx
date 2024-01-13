import './styles.css';
import React, { useState, useEffect } from 'react';
import { useAuthToken } from '../../hooks/useAuthToken';
import { Pet } from '../../types/pet';
import { ReactComponent as DeleteIcon } from '../../assets/images/delete.svg';
import { ReactComponent as EditIcon } from '../../assets/images/edit.svg';
import { useNavigate } from 'react-router-dom';

const MyPets = () => {

  const [pets, setPets] = useState<Pet[]>([]);
  const token = useAuthToken();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = async () => {
      if (!token) {
        console.log("Usuário não autenticado");
        return;
      }

      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/pets/mypets`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPets(data);
        } else {
          console.log("Falha na resposta do servidor");
        }
      } catch (error) {
        console.error('Falha ao buscar pets', error);
      }
    };

    fetchPets();
  }, [token]);

  const handleEdit = (pet: Pet) => {
    navigate(`/editpet/${pet.id}`);
  };

  const handleDelete = (petId: number) => {
    console.log("Excluir", petId);
  };

  return (
    <div className='adopet-mypets-container'>
      <table>
        <thead>
          <tr>
            <th>Nome do Pet</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pets.map(pet => (
            <tr key={pet.id}>
              <td>{pet.name}</td>
              <td>
                <EditIcon className="adopet-edit-icon" onClick={() => handleEdit(pet)} />
                <DeleteIcon className="adopet-delete-icon" onClick={() => handleDelete(pet.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyPets;