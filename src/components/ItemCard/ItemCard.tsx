import { Item } from "../../types/Item";
import FavoriteIcon from "../UI/FavoriteIcon/FavoriteIcon";
import classes from "./ItemCard.module.scss";

type Props = {
  item: Item;
};

const ItemCard: React.FC<Props> = ({ item }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>{item?.id}</p>
        <FavoriteIcon item={item} />
      </div>
      <img src={item?.url} className={classes.img} />
      <p className={classes.title}>{item?.title}</p>
    </div>
  );
};

export default ItemCard;
