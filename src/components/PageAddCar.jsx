import { useContext } from "react";
import { Context } from "../App";

function PageAddCar() {
  
  const {model, setModel, description, setDescription, year, setYear, price, setPrice, addCar} = useContext(Context);

  return (
    <div>
      <div className="addCarDiv">
        <input
          placeholder="Введите марку автомобиля"
          value={model}
          onChange={(event) => setModel(event.target.value)}
        />
        <input
          placeholder="Введите описание автомобиля"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          placeholder="Введите год автомобиля"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
        <input
          placeholder="Введите цену автомобиля"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <button onClick={() => addCar(model, description, +year, +price)}>
          Добавить автомобиль
        </button>
      </div>
    </div>
  );
}
export default PageAddCar;