# Introdução

AdoPet é um portal para divulgação e controle de adoção de Pets.

Algumas Sistema desenvolvido seguindo as seguintes premissas: 
1. Será possível que público em geral possa cadastrar Pets para adoção.
    Campos obrigatórios que vão ser definidos devem ser preenchidos no cadastro de um pet para adoção. Nome do pet, a espécie, o sexo, a cidade, alguma descrição, pelo menos uma foto e um contato.

2. público em geral vai poder consultar os Pets cadastrados para adoção
3. Qualquer pessoa vai poder se cadastrar em uma fila de espera para adoção informando alguns dados obrigatórios. 
    Caracteristicas do pet que está procurando. 
4. Ao ser cadastrado um pet para adoção uma busca na fila de adoção deve ser realizaza automaticamente e em caso de compatibilidade, o usuário na fila de adoção deve ser notificado.

# Entidades

`Pet`
id
name
age
genre
type
size
details
image

`user`
id
name
email
phone
address

# Endpoints

## Pet

- `listAvailablePets` -> Retornar uma lista com todos os Pets disponíveis do sistema. Esse Endpoint deve receber um filtro para retornar apenas pets com status available.
- `addPet` -> Receber as informações de um pet e persistir no banco de dados.
- `updatePet{id}` -> Atualizar as informações de um pet com base no ID informado.
- `getPet{id}` -> Retorna informações de um Pet com base no ID informado.

## User

- `listUsers` -> Listar todos os usuários cadastrados no sistema
- `findById{id}` -> Retorna informações do usuário com base no ID.
- `addUser` -> Cadastra usuário no sistema.  
- `updateUser` -> Atualiza dados do Usuário
