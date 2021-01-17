import React from "react";
import PropTypes from 'prop-types'
import "./index.css";

const Signup = (setUsers) => {
  const [datos, setDatos] = useState({
    nameUser: "",
    idUser: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((users) => [datos, ...users]);
  };

  return (
    <div className="card-login">
      <div className="header__login">
        <h2>Login</h2>
      </div>

      <div className="form_login">
        <form action={handleSubmit}>
          <label htmlFor="nameUser">Nombre de usuario</label>
          <input
            type="text"
            value={datos.nameUser}
            placeholder="Type here name of user"
            className="inputs-form"
            onChange={handleChange}
            isrequired="true"
            name="nameUser"
          />
          <label htmlFor="idUser">Numero de identificacion</label>
          <input
            type="text"
            value={datos.idUser}
            placeholder="Type here number id of user"
            className="inputs-form"
            onChange={handleChange}
            isrequired="true"
            name="idUser"
          />
          <label htmlFor="email">Correo electronico</label>
          <input
            type="email"
            value={datos.email}
            placeholder="Type here the email"
            className="inputs-form"
            onChange={handleChange}
            isrequired="true"
            name="email"
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            value={datos.password}
            placeholder="Type here the password"
            className="inputs-form"
            onChange={handleChange}
            isrequired="true"
            name="password"
          />
        </form>
      </div>

      <div className="footer__login">
          <Link to="/home">Olvidaste tu contraseña?</Link>
      </div>
    </div>
  );
};

Signup.propTypes = {
    setUsers: PropTypes.func.isRequired,
};

export default Signup;
