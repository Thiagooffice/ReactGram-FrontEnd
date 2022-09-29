import "./Auth.css";

//components
import { Link } from "react-router-dom";

//Hooks
import { useState, useEffect } from "react";

//Redux
import { register, reset } from "../../slices/authSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch()

  const {loading, error} = useSelector((state) => state.auth)

  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    console.log(user);

    dispatch(register(user))
  }

  //Clean all auth states
  useEffect(()=>{
    dispatch(reset())
  }, [dispatch])

  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p class="subtitle">Cadastre-se para ver as fotos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name || ""}
        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email || ""}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password || ""}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword || ""}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui.</Link>
      </p>
    </div>
  );
}
