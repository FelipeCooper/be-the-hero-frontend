import React from "react";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import "./style.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the hero" />
        <span>Bem vindo APATE</span>
        <Link to="/incidents/new" className="button">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso de teste</p>
          <strong>DESCRIÇÃO</strong>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            tempora quos ea doloribus.
          </p>
          <strong>Valor</strong>
          <p>R$ 100,00</p>
          <button type="button">
            <FiTrash2 size="20" color="a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso de teste</p>
          <strong>DESCRIÇÃO</strong>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            tempora quos ea doloribus.
          </p>
          <strong>Valor</strong>
          <p>R$ 100,00</p>
          <button type="button">
            <FiTrash2 size="20" color="a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso de teste</p>
          <strong>DESCRIÇÃO</strong>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            tempora quos ea doloribus.
          </p>
          <strong>Valor</strong>
          <p>R$ 100,00</p>
          <button type="button">
            <FiTrash2 size="20" color="a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso de teste</p>
          <strong>DESCRIÇÃO</strong>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            tempora quos ea doloribus.
          </p>
          <strong>Valor</strong>
          <p>R$ 100,00</p>
          <button type="button">
            <FiTrash2 size="20" color="a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
