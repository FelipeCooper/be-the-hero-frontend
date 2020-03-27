import React, { useEffect, useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import "./style.css";
import api from "../../services/api";

export default function Profile() {
  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api
      .get("profiles", { headers: { Authorization: ongId } })
      .then(response => setIncidents(response.data));
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      api.delete(`incidents/${id}`, { headers: { Authorization: ongId } });
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert("Erro ao deletar, tente novamente");
    }
  }
  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the hero" />
        <span>Bem vindo {ongName}</span>
        <Link to="/incidents/new" className="button">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>
            <strong>DESCRIÇÃO</strong>
            <p>{incident.description}</p>
            <strong>Valor</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </p>
            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size="20" color="a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
