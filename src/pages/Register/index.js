import React from "react";
import logoImg from "../../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./style.css";
import api from "../../services/api";
import { useFormik } from "formik";

export default function Register() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      whatsapp: "",
      city: "",
      uf: ""
    },
    onSubmit: async values => {
      try {
        const response = await api.post("ongs", values);
        alert(`Cadastro Efetuado! Seu Id é ${response.data.id}`);
        history.push("/");
      } catch (error) {
        alert("Erro ao cadastrar, tente novamente");
      }
    }
  });
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size="16" color="E02041" />
            Não tenho cadastro
          </Link>
        </section>
        <form onSubmit={formik.handleSubmit}>
          <input
            onChange={formik.handleChange}
            name="name"
            placeholder="Nome da ONG"
          />
          <input
            onChange={formik.handleChange}
            name="email"
            type="email"
            placeholder="E-mail"
          />
          <input
            onChange={formik.handleChange}
            name="whatsapp"
            placeholder="WhatsApp"
          />
          <div className="input-group">
            <input
              onChange={formik.handleChange}
              name="city"
              placeholder="Cidade"
            />
            <input
              onChange={formik.handleChange}
              name="uf"
              placeholder="UF"
              style={{ width: 80 }}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
