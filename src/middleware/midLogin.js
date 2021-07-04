const midLogin = (req, res, next) => {
  let logged = true;
  if(logged) next();
  else res.send('No tiene permisos de acceso');
}

module.exports = midLogin;