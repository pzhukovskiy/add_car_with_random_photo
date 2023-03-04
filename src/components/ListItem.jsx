import { useContext, useEffect } from "react";
import { Context } from "../App";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import styles from "../style/ListItem.module.scss";

function ListItem() {
  const { deleteCar, car } = useContext(Context);
  const random_photo = Math.floor(Math.random() * 100);
  return (
    <div>
      {car && car.length > 0 ? (
          <div>
            {car.map((carModel) => (
              <div key={carModel.id} className={styles.showCar}>
                <h1 className={styles.CarModel}>Название: {carModel.model}</h1>
                <img src={`https://picsum.photos/id/${random_photo}/250/150`}/>
                <p className="CarDescription">
                  Описание: {carModel.description}
                </p>
                <p className="CarYear">Год: {carModel.year}</p>
                <p className="CarPrice">Цена: {carModel.price} руб.</p>
                <Tooltip title="Удалить автомобиль">
                  <Button onClick={() => deleteCar(carModel)}>Удалить</Button>
                </Tooltip>
              </div>
            ))}
          </div>
        ) : (
          <div>Автомобили отсутствуют</div>
        )}
    </div>
  );
}

export default ListItem;