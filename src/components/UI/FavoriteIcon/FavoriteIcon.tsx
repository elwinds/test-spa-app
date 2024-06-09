import { useItemsStore } from "../../../utils/store/itemsStore";
import classes from "./FavoriteIcon.module.scss";

import { Item } from "../../../types/Item";

type Props = {
  item: Item;
};

const FavoriteIcon: React.FC<Props> = ({ item }) => {
  const { favoriteItems, setItemToFavorites, deleteItemFromFavorites } =
    useItemsStore((state) => state);

  const isItemFavorite = favoriteItems.find((favItem) => favItem.id === item.id);

  const handleFavoriteClick = () => {
    isItemFavorite ? deleteItemFromFavorites(item.id) : setItemToFavorites(item)
  };

  return (
    <img
      className={classes.icon}
      onClick={handleFavoriteClick}
      src={
        isItemFavorite
          ? "/assets/icons/fill-favorite.png"
          : "/assets/icons/add-favorite.png"
      }
      alt="add to favorite"
    />
  );
};

export default FavoriteIcon;
