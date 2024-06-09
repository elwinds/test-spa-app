import { useItemsStore } from "../../utils/store/itemsStore";
import ItemCard from "../ItemCard/ItemCard";
import classes from "./FavoriteItemsList.module.scss";

const FavoriteItemsList: React.FC = () => {
  const favoriteItems = useItemsStore().favoriteItems;

  const EmptyState = <p>NO FAVORITE ITEMS</p>;

  const ItemsElements = favoriteItems?.map((item) => (
    <ItemCard key={item.id} item={item} />
  ));

  return (
    <div className={classes.container}>
      {favoriteItems?.length === 0 ? EmptyState : ItemsElements}
    </div>
  );
};

export default FavoriteItemsList;
