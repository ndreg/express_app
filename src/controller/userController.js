const users = [
  {id: 1, nombre: "Andres", edad: 22},
  {id: 2, nombre: "Gabriela", edad: 21},
  {id: 3, nombre: "Jorge", edad: 20},
]

const showUsers = (req, res) => {
  res.render('showUsers', {users: users});
}

const deleteUsers = (req, res) => {
  let param = req.params.id;
  for(let i=0; i<users.length; i++) {
    if(users[i].id == param) {
      users.splice(i, 1);
      break;
    }
  }
  res.render('showUsers', {users: users});
}

const createUser = (req, res) => {
  users.push(req.body)
}

const updateUser = (req, res) => {
  const param = req.params.id;
  for(let i=0; i<users.length; i++) {
    if(users[i].id == param) {
      users[i].nombre = req.body.nombre;
      users[i].edad = req.body.edad;
      break;
    }
  }
  res.render('showUsers', {users: users});
}

module.exports = {showUsers, deleteUsers, createUser, updateUser}