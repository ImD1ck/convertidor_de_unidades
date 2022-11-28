import { useEffect } from "react";
import "../styles/Saved.css";

const Saved = ({ guardados, setGuardados }) => {
  const handleDelete = (index) => {
    const newFavs = guardados.filter((i) => i !== index);
    setGuardados(newFavs);
    localStorage.setItem("favorites", JSON.stringify(newFavs));
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites) setGuardados(favorites);
  }, []);

  return (
    <div className="Saved">
      <h3 className="saved__title">saved</h3>
      <div className="pestana">
        {guardados.map((guardado, index) => (
          <div className="salvados" key={index}>
            <span>{guardado}</span>
            <button
              className="borraFav"
              onClick={() => {
                handleDelete(guardado);
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;
