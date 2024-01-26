import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Configuration de la bibliothèque FontAwesome
config.autoAddCss = false; // Désactiver l'ajout automatique des styles

// Ajout des icônes à la bibliothèque
library.add(faAngleLeft, faAngleRight);


const Home = () => {
  const carsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const cars = [
    { id: 1, name: "Voiture 1", model: "Modèle A", image: "cars1.jpg" },
    { id: 2, name: "Voiture 2", model: "Modèle B", image: "cars2.jpeg" },
    { id: 3, name: "Voiture 3", model: "Modèle C", image: "cars3.jpg" },
    { id: 4, name: "Voiture 4", model: "Modèle A", image: "cars2.jpeg" },
    { id: 5, name: "Voiture 5", model: "Modèle B", image: "cars1.jpg" },
    { id: 6, name: "Voiture 6", model: "Modèle C", image: "cars1.jpg" },
    { id: 7, name: "Voiture 7", model: "Modèle A", image: "cars3.jpg" },
    { id: 8, name: "Voiture 8", model: "Modèle B", image: "cars2.jpeg" },
  ];

  const totalPages = Math.ceil(cars.length / carsPerPage);

  // Calculer l'index de début et de fin des voitures à afficher sur la page actuelle
  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;

  // Filtrer les voitures à afficher sur la page actuelle
  const displayedCars = cars.slice(startIndex, endIndex);

  // Fonction pour passer à la page suivante
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Fonction pour passer à la page précédente
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="container">
      <h1 className="heading">Bienvenue sur notre service de location de voiture</h1>
      <p className="paragraph">
        Découvrez notre large sélection de voitures et trouvez celle qui
        correspond à vos besoins.
      </p>

      <h2 className="subHeading">Voitures Disponibles</h2>
      <div className="list-container">
        <div className="pagination-arrows avant-container">
          <button onClick={prevPage} disabled={currentPage === 1}>
            previous
          </button>
        </div>
        <ul className="list">
          {displayedCars.map((car) => (
            <li key={car.id} className="listItem">              
                <img src={`/images/${car.image}`} alt={car.name} className="image" />
              <div>
                <p>{car.name}</p>
                <p>{car.model}</p>
                <Link to={`/voiture/${car.id}`}>
                  <button>Voir les détails</button>
                </Link>
              </div>
              </li>
          ))}
        </ul>
      <div className="pagination-arrows apres-container">
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          after
        </button>
      </div>
      </div>
    </div>
  );
};

export default Home;
