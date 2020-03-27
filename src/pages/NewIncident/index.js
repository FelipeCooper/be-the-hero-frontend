import React from "react";
import "./style.css";
import logoImg from "../../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useFormik } from "formik";
import api from "../../services/api";

export default function NewIncident() {
  const ongId = localStorage.getItem("ongId");
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      value: ""
    },
    onSubmit: async values => {
      try {
        api.post("incidents", values, {
          headers: { Authorization: ongId }
        });
        history.push("/profile");
      } catch (error) {
        alert("Houve um problema ao cadastrar, tente novamente");
      }
    }
  });
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar o herói para resolver
            isso.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size="16" color="E02041" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="title"
            onChange={formik.handleChange}
            placeholder="Titulo do caso"
          />
          <textarea
            name="description"
            onChange={formik.handleChange}
            placeholder="Descriçao"
          />
          <input
            name="value"
            onChange={formik.handleChange}
            placeholder="Valor"
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
