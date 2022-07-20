import "../styles/Saved.css";

const Saved = ({ guardados, setGuardados }) => {
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
                setGuardados((prevGuardados) =>
                  prevGuardados.filter(
                    (prev) => guardados.indexOf(prev) !== index
                  )
                );
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
