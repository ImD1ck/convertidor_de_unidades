import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";

import units from "../utils/units";

import "../styles/Convert.css";

const Convert = ({ guardados, setGuardados }) => {
  const [favorite, setFavorite] = useState(false);
  const [inputValue, setInputValue] = useState();
  const [selectValue, setSelectValue] = useState(0);
  const [result, setResult] = useState(0);

  const handleFavorite = () => {
    if (isNaN(inputValue) || inputValue === 0) {
      alert("Tienes que poner un número");
      return;
    }
    const newFav = `${inputValue} ${units[selectValue].input} → ${result} ${units[selectValue].result}`;
    setGuardados((favorites) => [...favorites, newFav]);
    setFavorite((prev) => !prev);
    localStorage.setItem("favorites", JSON.stringify([...guardados, newFav]));
  };

  useEffect(() => {
    if (favorite && !isNaN(inputValue)) setFavorite(false);
    const multiplicacion = inputValue * units[selectValue].udc;
    let redondeo = parseFloat(multiplicacion.toFixed(2));
    redondeo = !redondeo ? 0 : redondeo;
    setResult(redondeo);
  }, [inputValue, selectValue]);

  return (
    <div className="convert">
      <h2 className="convert__title">convert</h2>
      <div className="convert__body">
        <div className="input__group">
          <select
            value={selectValue}
            name=""
            id=""
            onChange={(event) => {
              setSelectValue(parseInt(event.target.value));
            }}
          >
            {units.map(({ input, result }, index) => (
              <option key={index} value={index}>
                {`${input} → ${result}`}
              </option>
            ))}
          </select>

          <button
            onClick={() => {
              setInputValue(result);
              setSelectValue(units[selectValue].indexChange);
            }}
          >
            <BsArrowLeftRight />
          </button>
        </div>

        <div className="input__group">
          <input
            type="number"
            name="input"
            id="input"
            className="input"
            placeholder="0"
            value={inputValue ? inputValue : ""}
            onChange={(event) => setInputValue(parseFloat(event.target.value))}
          />
          <label htmlFor="input">{units[selectValue].input}</label>
        </div>
      </div>

      <div className="convert__footer">
        <button
          className="button__favorite"
          onClick={handleFavorite}
          disabled={favorite}
        >
          <AiFillHeart className={`icon ${favorite ? "" : "favicon"}`} />
        </button>

        <span className="result">{`${result} ${units[selectValue].result}`}</span>
      </div>
    </div>
  );
};

export default Convert;
