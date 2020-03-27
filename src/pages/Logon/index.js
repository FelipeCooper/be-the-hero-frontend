import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import { useFormik } from "formik";

import { FiLogIn } from "react-icons/fi";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

export default function Logon() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      id: ""
    },
    onSubmit: async value => {
      try {
        let response = await api.post("sessions", value);
        localStorage.setItem("ongId", value.id);
        localStorage.setItem("ongName", response.data.name);
        history.push("/profile");
      } catch (error) {
        alert("ID não encontrada");
      }
    }
  });
  return (
    <div className="logon-container">
      <section className="form">
        <form onSubmit={formik.handleSubmit}>
          <img src={logoImg} alt="Be the hero" />
          <h1>Faça seu logon</h1>
          <input
            name="id"
            onChange={formik.handleChange}
            placeholder="Sua ID"
          />
          <button className="button">Entrar</button>
          <Link className="back-link" to="/register">
            <FiLogIn size="16" color="E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
