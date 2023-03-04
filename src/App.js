import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "./components/ListItem";
import PageAddCar from "./components/PageAddCar";
import { addCarAction, deleteCarAction } from "./store/action/action";

export const Context = createContext(null);

function App() {
  const dispatch = useDispatch();
  const car = useSelector((state) => state.item.items);

  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  const Car = {
    id: new Date(),
    model,
    description,
    year,
    price,
  };

  const addCar = (model, description, year, price) => {
    if (model.trim && description && year && price) {
      dispatch(addCarAction(Car));
      console.log(Car);
      setModel("");
      setDescription("");
      setYear("");
      setPrice("");
    } else {
      alert("Введите корректные данные");
    }
  };

  const deleteCar = (car) => {
    dispatch(deleteCarAction(car.id));
  };

  return (
    <div className="App">
      <Context.Provider value={{model, setModel, description, setDescription, year, setYear, price, setPrice, addCar, deleteCar, car}}>
        <PageAddCar/>
        <ListItem/>
      </Context.Provider>
    </div>
  );
}

export default App;

//useOutlet - для просмотра маршрутов 