import { useItemsStore } from "../../utils/store/itemsStore";
import ItemCard from "../ItemCard/ItemCard";
import classes from "./ItemsList.module.scss";

const ItemsList: React.FC = () => {
  const { isLoading, items, error } = useItemsStore((state) => state);

  return (
    <div className={classes.container}>
      {items?.map((item) => (
        <ItemCard key={item?.id} item={item} />
      ))}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ItemsList;
