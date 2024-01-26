import React, { useState } from "react";
import "./Header.css";

const Header = ({ history, handleSubmit }) => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <header className="main-header">

      <div className="logo-container">
      <img src={`/images/logo.jpeg`} alt="logo.jpeg" className="image" />
      </div>
      <div id="tete">
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/">Accueil</a>
            </li>
            <li className="nav-item">
              <a href="/messages">Messages</a>
            </li>
          </ul>
        </nav>

        <div className="search-bar">
          <input type="text" placeholder="Rechercher une voiture" />
          <button onClick={handleSubmit}><span className="search-icon">&#128269;</span></button>
        </div>

        <button className="login-button" onClick={handleLogin}>
          Connexion
        </button>

      {showLogin && <div className="blur-overlay" onClick={closeLogin} />}

        {/* Fenêtre de connexion */}
        {showLogin && (
          <div className="login-modal">
            <span className="close-button" onClick={closeLogin}>
              &times;
            </span>

            <h2>Connexion</h2>
            <form>
              <p>
                <label htmlFor="username">Nom d'utilisateur:</label>
                <input type="text" id="username" name="username" />
              </p>
              <p>
                <label htmlFor="password">Mot de passe:</label>
                <input type="password" id="password" name="password" />
              </p>

              <button type="submit">Se connecter</button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
