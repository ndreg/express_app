const showUsers = (req, res) => {
  res.render('showUsers');
}

const deleteUsers = (req, res) => {
  res.render('deleteUsers', {});
}

module.exports = {showUsers, deleteUsers}